"use server";

import { quoteFormSchema } from "@/lib/validation";
import { sendTransactionalEmail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function submitQuoteForm(formData: FormData) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";

    const rateCheck = checkRateLimit(`quote:${ip}`, 5, 60000);
    if (!rateCheck.success) {
      return {
        success: false,
        message: "Too many submission attempts. Please wait 60 seconds and try again.",
      };
    }

    const raw = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      company: (formData.get("company") as string) || undefined,
      service: formData.get("service") as string,
      projectType: formData.get("projectType") as string,
      projectDescription: formData.get("projectDescription") as string,
      desiredFeatures: (formData.get("desiredFeatures") as string) || undefined,
      budgetRange: (formData.get("budgetRange") as string) || undefined,
      preferredTimeline: (formData.get("preferredTimeline") as string) || undefined,
      relevantLinks: (formData.get("relevantLinks") as string) || undefined,
      consent: formData.get("consent") === "on",
      website_honeypot: (formData.get("website_honeypot") as string) || "",
    };

    if (raw.website_honeypot && raw.website_honeypot.trim().length > 0) {
      return { success: true, message: "Thank you for your proposal request." };
    }

    const result = quoteFormSchema.safeParse(raw);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Validation failed.";
      return { success: false, message: firstError };
    }

    const data = result.data;

    const emailResult = await sendTransactionalEmail({
      subject: `[Quotation Request] ${data.fullName} — ${data.service}`,
      senderName: data.fullName,
      senderEmail: data.email,
      htmlContent: `
        <h2>Project Quotation Request via vrksolutions.in</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget Range:</strong> ${data.budgetRange || "Flexible / Not specified"}</p>
        <p><strong>Preferred Timeline:</strong> ${data.preferredTimeline || "Flexible"}</p>
        <p><strong>Relevant Links / References:</strong> ${data.relevantLinks || "None"}</p>
        <p><strong>Project Description:</strong></p>
        <p style="white-space: pre-wrap;">${data.projectDescription}</p>
        <p><strong>Desired Functionality:</strong></p>
        <p style="white-space: pre-wrap;">${data.desiredFeatures || "None specified"}</p>
      `,
      textContent: `Project Quotation Request\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nCompany: ${data.company || "N/A"}\nService: ${data.service}\nType: ${data.projectType}\nBudget: ${data.budgetRange || "N/A"}\nTimeline: ${data.preferredTimeline || "N/A"}\n\nDescription:\n${data.projectDescription}\n\nFeatures:\n${data.desiredFeatures || "N/A"}`,
    });

    return { success: emailResult.success, message: emailResult.message };
  } catch (err) {
    console.error("submitQuoteForm error:", err);
    return { success: false, message: "Internal server error. Please try again." };
  }
}
