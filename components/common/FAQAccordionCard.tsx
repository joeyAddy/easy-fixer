import React from "react";

interface FAQAccordionCardProps {
  question: string;
  answer: string;
  index: number;
}

const FAQAccordionCard = ({
  question,
  answer,
  index,
}: FAQAccordionCardProps) => {
  return (
    <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
      <h2 className="mb-0" id={`flush-heading${index}`}>
        <button
          className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-orange-600  [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-orange-400"
          type="button"
          data-te-collapse-init
          data-te-collapse-collapsed
          data-te-target={`#flush-collapse${index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${index}`}
        >
          {question}
          <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`flush-collapse${index}`}
        className="!visible hidden border-0"
        data-te-collapse-item
        aria-labelledby={`flush-heading${index}`}
        data-te-parent="#accordionFAQ"
      >
        <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordionCard;
