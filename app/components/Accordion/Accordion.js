"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="divide-gray-400 divide-y">
      {items.map((item, i) => (
        <div key={i} data-animate="fade-in-up">
          {/* Header */}
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center p-4 lg:p-6 text-left hover:bg-gray-50 transition"
          >
            <span className="font-semibold">{item.title}</span>

            <span className="text-xl font-light">
              {activeIndex === i ? "−" : "+"}
            </span>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === i
                ? "max-h-[200px] px-6 pb-6"
                : "max-h-0 px-6 pb-0"
            }`}
          >
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
