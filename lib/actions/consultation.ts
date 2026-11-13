"use server";

import { consultationFormSchema } from "@/lib/validation";
import { sendTransactionalEmail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function submitConsultationForm(formData: FormData) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";

    const rateCheck = checkRateLimit(`consultation:${ip}`, 5, 60000);
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
      serviceInterest: formData.get("serviceInterest") as string,
      contactMethod: formData.get("contactMethod") as any,
      timeZone: formData.get("timeZone") as string,
      preferredAvailability: formData.get("preferredAvailability") as string,
      meetingObjective: formData.get("meetingObjective") as string,
      consent: formData.get("consent") === "on",
      website_honeypot: (formData.get("website_honeypot") as string) || "",
    };

    if (raw.website_honeypot && raw.website_honeypot.trim().length > 0) {
      return { success: true, message: "Thank you for your consultation request." };
    }

    const result = consultationFormSchema.safeParse(raw);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Validation failed.";
      return { success: false, message: firstError };
    }

    const data = result.data;

    const emailResult = await sendTransactionalEmail({
      subject: `[Consultation Request] ${data.fullName} — ${data.serviceInterest}`,
      senderName: data.fullName,
      senderEmail: data.email,
      htmlContent: `
        <h2>Strategy Consultation Request via vrksolutions.in</h2>
        <p><em>Note: This is a consultation request pending calendar confirmation.</em></p>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
        <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
        <p><strong>Time Zone:</strong> ${data.timeZone}</p>
        <p><strong>Preferred Availability:</strong> ${data.preferredAvailability}</p>
        <p><strong>Meeting Objective:</strong></p>
        <p style="white-space: pre-wrap;">${data.meetingObjective}</p>
      `,
      textContent: `Strategy Consultation Request\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || "N/A"}\nCompany: ${data.company || "N/A"}\nService: ${data.serviceInterest}\nMethod: ${data.contactMethod}\nTimezone: ${data.timeZone}\nAvailability: ${data.preferredAvailability}\n\nObjective:\n${data.meetingObjective}`,
    });

    return { success: emailResult.success, message: emailResult.message };
  } catch (err) {
    console.error("submitConsultationForm error:", err);
    return { success: false, message: "Internal server error. Please try again." };
  }
}
