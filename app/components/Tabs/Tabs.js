"use client";
import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div
        className="grid border border-[#CBD5E1] rounded relative backdrop-blur-xs"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
        data-animate="fade-in-left"
      >
        {/* Indicator */}
        <div
          className="absolute left-0 top-0 h-full bg-[#F1F5F9] z-0 transition-all duration-300 ease-in-out"
          style={{
            width: 100 / tabs.length + "%",
            left: `${(100 / tabs.length) * active}%`,
          }}
        ></div>

        {tabs.map((tab, i) => (
          <h4
            key={i}
            className={`py-2 px-4 text-sm relative cursor-pointer text-center font-semibold! overflow-hidden
              ${i !== 0 ? "border-l border-[#CBD5E1]" : ""}
              
            `}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </h4>
        ))}
      </div>

      <div className="py-4" data-animate="fade-in-left">
        {tabs[active].content}
      </div>
    </div>
  );
}
