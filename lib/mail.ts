import { Resend } from "resend";
import { COMPANY } from "./constants";

export interface SendEmailPayload {
  subject: string;
  senderName: string;
  senderEmail: string;
  htmlContent: string;
  textContent: string;
}

export interface EmailDispatchResult {
  success: boolean;
  provider: "resend" | "development_unconfigured";
  message: string;
  messageId?: string;
}

export async function sendTransactionalEmail(
  payload: SendEmailPayload
): Promise<EmailDispatchResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || COMPANY.email;
  const senderAddress =
    process.env.CONTACT_SENDER_EMAIL || "VRK Solutions <enquiries@vrksolutions.in>";

  // Honest unconfigured state
  if (!apiKey || apiKey.includes("your_resend_api_key")) {
    console.warn(
      `[VRK Solutions Mailer] Transactional email provider (RESEND_API_KEY) is not yet configured. ` +
        `Enquiry from "${payload.senderName}" <${payload.senderEmail}> was received and validated on the server. ` +
        `To enable live external email dispatch to ${receiverEmail}, configure RESEND_API_KEY and verify domain in production.`
    );
    return {
      success: true,
      provider: "development_unconfigured",
      message:
        "Your enquiry has been securely received by our server. Note: Transactional email delivery service is in development mode pending RESEND_API_KEY configuration.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: senderAddress,
      to: [receiverEmail],
      replyTo: payload.senderEmail,
      subject: payload.subject,
      text: payload.textContent,
      html: payload.htmlContent,
    });

    if (error) {
      console.error("[VRK Solutions Mailer] Resend API error:", error);
      return {
        success: false,
        provider: "resend",
        message: `Unable to dispatch email: ${error.message}`,
      };
    }

    return {
      success: true,
      provider: "resend",
      message: "Your message has been sent successfully. Our team will review your specifications.",
      messageId: data?.id,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error during email dispatch";
    console.error("[VRK Solutions Mailer] Exception:", errorMsg);
    return {
      success: false,
      provider: "resend",
      message: `Failed to deliver email: ${errorMsg}`,
    };
  }
}
