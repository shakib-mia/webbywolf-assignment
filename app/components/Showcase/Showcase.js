import React from "react";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import showcase from "../../assets/showcase.jpg";
import Image from "next/image";

const Showcase = () => {
  return (
    <section className="bg-[#F8F8F8] relative">
      <div className="w-full h-3 lg:h-5 bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] absolute top-full left-0 right-0 container mx-auto"></div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        <aside className="order-2 lg:order-1">
          <Image
            src={showcase}
            alt="showcase"
            className="w-full h-full"
            data-animate="fade-in-left"
          />
        </aside>
        <aside className="order-1 lg:order-2">
          <h4 className="text-blue-800" data-animate="fade-in-right">
            Lorem ipsum dolor sit
          </h4>
          <h2
            className="uppercase mt-3 mb-4 lg:mt-5 lg:mb-5"
            data-animate="fade-in-right"
          >
            <span className="text-blue-800">Lorem</span> ipsum dolor sit amet
            consectetur. Enim donec.
          </h2>
          <p data-animate="fade-in-right">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam.
          </p>

          <ul className="py-5 lg:py-10 grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} data-animate="fade-in-right">
                Lorem ipsum dolor sit
              </li>
            ))}
          </ul>
          <Button
            className="flex! gap-2 items-center"
            data-animate="fade-in-right"
            data-delay="200"
          >
            Get Started <FaArrowRight />
          </Button>
        </aside>
      </div>
    </section>
  );
};

export default Showcase;
