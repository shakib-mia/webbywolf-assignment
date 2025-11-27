"use client";

import React, { useEffect, useState } from "react";
import partner1 from "../../assets/partners/partner1.jpg";
import partner2 from "../../assets/partners/partner2.jpg";
import partner3 from "../../assets/partners/partner3.jpg";
import partner4 from "../../assets/partners/partner4.jpg";
import partner5 from "../../assets/partners/partner5.jpg";
import partner6 from "../../assets/partners/partner6.jpg";
import partner7 from "../../assets/partners/partner7.jpg";
import partner8 from "../../assets/partners/partner8.jpg";
import partner9 from "../../assets/partners/partner9.jpg";
import partner10 from "../../assets/partners/partner10.jpg";
import partner11 from "../../assets/partners/partner11.jpg";
import partner12 from "../../assets/partners/partner12.jpg";
import Image from "next/image";

const Partners = () => {
  const partnerImages = [
    partner5,
    partner6,
    partner4,
    partner11,
    partner10,
    partner1,
    partner7,
    partner3,
    partner8,
    partner9,
    partner12,
    partner2,
  ];

  // ====== COLUMN DETECTION ======
  const [cols, setCols] = useState(1);

  const updateCols = () => {
    if (window.innerWidth >= 1024) setCols(4);
    else if (window.innerWidth >= 768) setCols(3);
    else setCols(1);
  };

  useEffect(() => {
    // run state update after effect completes → no warning
    const raf = requestAnimationFrame(() => {
      updateCols();
    });

    window.addEventListener("resize", updateCols);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateCols);
    };
  }, []);

  return (
    <section className="container">
      <h2 className="uppercase mx-auto text-center lg:w-7/12">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12 mt-8 md:mt-12 lg:mt-16 items-center">
        {partnerImages.map((image, index) => {
          const delay = (index % cols) * 100; // 120ms stagger

          return (
            <div key={index} className="flex justify-center items-center">
              <Image
                width={280}
                height={160}
                src={image.src}
                alt={`Partner ${index + 1}`}
                className="max-h-20 object-contain w-full"
                data-animate="fade-in-up"
                data-delay={delay + "ms"}
                // style={{ animationDelay: `${delay}ms` }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
