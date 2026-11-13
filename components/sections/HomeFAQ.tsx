"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/Accordion";

interface HomeFAQProps {
  faqs: { question: string; answer: string }[];
}

export default function HomeFAQ({ faqs }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
