import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title: string;
  items: FAQItem[];
};

export default function FAQ({ title, items }: FAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">{title}</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {items.map((item, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    aria-controls={`faq-${index}`}
                    aria-expanded={openItem === index}
                  >
                    <span className="text-base font-semibold leading-7">{item.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 transform ${openItem === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  id={`faq-${index}`}
                >
                  <p className="text-base leading-7 text-gray-600">{item.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
