"use server";

import { contactFormSchema } from "@/lib/validation";
import { sendTransactionalEmail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function submitContactForm(formData: FormData) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";

    const rateCheck = checkRateLimit(`contact:${ip}`, 5, 60000);
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
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
      website_honeypot: (formData.get("website_honeypot") as string) || "",
    };

    if (raw.website_honeypot && raw.website_honeypot.trim().length > 0) {
      return { success: true, message: "Thank you for your enquiry." };
    }

    const result = contactFormSchema.safeParse(raw);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Validation failed.";
      return { success: false, message: firstError };
    }

    const data = result.data;

    const emailResult = await sendTransactionalEmail({
      subject: `[Contact Enquiry] ${data.fullName} — ${data.service}`,
      senderName: data.fullName,
      senderEmail: data.email,
      htmlContent: `
        <h2>New Client Enquiry via vrksolutions.in</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Required Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
      `,
      textContent: `New Contact Enquiry\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nCompany: ${data.company || "N/A"}\nService: ${data.service}\n\nMessage:\n${data.message}`,
    });

    return { success: emailResult.success, message: emailResult.message };
  } catch (err) {
    console.error("submitContactForm error:", err);
    return { success: false, message: "Internal server error. Please try again." };
  }
}
