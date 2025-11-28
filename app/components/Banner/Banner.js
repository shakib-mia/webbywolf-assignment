import React from "react";
import banner from "./../../assets/banner.jpg";
import Button from "../Button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="bg-cover lg:bg-size-[110%] bg-center bg-no-repeat text-center text-white"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <section className="bg-black/40">
        <div className="container relative">
          <Link
            href="/"
            className="lg:text-2xl bg-gray-400 px-4 py-2 text-white font-inter font-extrabold cursor-pointer absolute -top-10 left-4 lg:left-0"
            data-animate="fade-in"
            data-delay="1000"
          >
            Logo
          </Link>
          <div className="lg:w-5/6 mx-auto">
            <h2 className="uppercase my-7" data-animate="fade-in-down">
              Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
              egestas aliquam viverra mi.
            </h2>

            <div className="space-y-4 font-semibold lg:w-5/6 mx-auto">
              <p data-animate="fade-in-up">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                libero urna arcu vulputate sed ut. Nisl porta massa diam
                condimentum nulla quam.
              </p>
              <p data-animate="fade-in-up">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                condimentum ultrices non. Ornare semper in tincidunt
                pellentesque cras mauris in vitae. At viverra quis eu malesuada
                vel et porttitor. Nulla luctus quam lacus lacus non at.
                Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                Tincidunt cursus vitae leo.
              </p>
            </div>

            <Button
              className="bg-white! text-black! shadow-lg active:shadow-none border-none hover:bg-primary! hover:text-white! mt-7"
              href="https://templatehearth.vercel.app/contact"
              target="_blank"
              data-animate="fade-in-up"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
