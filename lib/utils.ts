import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/919398845947?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello VRK Solutions, I would like to discuss a project.";
export const WHATSAPP_QUOTE_MESSAGE =
  "Hello VRK Solutions, I would like to request a project quotation.";
export const WHATSAPP_CONSULT_MESSAGE =
  "Hello VRK Solutions, I would like to schedule a consultation.";
