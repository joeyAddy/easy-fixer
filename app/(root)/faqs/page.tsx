"use client";
import FAQAccordionCard from "@/components/common/FAQAccordionCard";
import { FAQs } from "@/constants/FAQs";
import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);

  return (
    <main className="min-h-[50dvh] px-6 md:px-12 lg:px-20">
      <div className="container my-6">
        <section className="mb-20">
          <h2 className="mb-6 pl-6 text-3xl font-bold">
            Frequently asked questions
          </h2>

          <div id="accordionFAQ">
            {FAQs.map((faq, index) => (
              <FAQAccordionCard
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQ;
