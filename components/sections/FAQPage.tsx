"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/Accordion";

interface FAQPageProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQPage({ faqs }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto border-t border-brand-hairline">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
