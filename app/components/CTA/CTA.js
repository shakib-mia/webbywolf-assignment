import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="container">
      <div className="lg:w-1/2 mx-auto flex gap-3 lg:gap-5 flex-col items-center">
        <Link
          href="/"
          className="text-2xl bg-gray-400 px-4 py-2 text-white font-inter font-extrabold cursor-pointer"
          data-animate="fade-in-left"
        >
          Logo
        </Link>

        <h2 className="uppercase text-center" data-animate="fade-in-left">
          Lorem ipsum dolor sit amet consectetur. Dui.
        </h2>
        <p className="text-center" data-animate="fade-in-left">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>
        <Button
          className="flex! gap-2 items-center"
          data-animate="fade-in-left"
        >
          Get Started <FaArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
