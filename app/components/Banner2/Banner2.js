import React from "react";
import banner from "./../../assets/banner2.png";
import Button from "../Button/Button";
import Link from "next/link";

const Banner2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner.src})` }}
      className="bg-size-[110%] bg-center bg-no-repeat relative text-center text-white"
    >
      <section className="bg-black/40">
        <div className="container relative">
          <Link
            href="/"
            className="text-2xl bg-gray-400 px-4 py-2 text-white font-inter font-extrabold cursor-pointer absolute -top-10 left-0"
            data-animate="fade-in"
            data-delay="1000"
          >
            Logo
          </Link>
          <div className="lg:w-5/6 mx-auto">
            <h2 className="uppercase my-7" data-animate="fade-in-down">
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
              viverra mi. dolor sit amet consectetur. Quis adipiscing
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner2;
