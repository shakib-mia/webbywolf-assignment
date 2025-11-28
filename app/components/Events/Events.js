"use client";

import React from "react";
import achievement from "./../../assets/achievement.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Events = () => {
  return (
    <section className="lg:mt-60 container">
      <h2 className="text-center mb-2 lg:mb-8" data-animate="fade-in-left">
        Lorem ipsum dolor sit amet{" "}
      </h2>
      <p className="text-center mb-10 lg:mb-20" data-animate="fade-in-left">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
        Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
        aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget
        purus ornare. Risus elit et fringilla habitant ut facilisi.{" "}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <aside data-animate="fade-in-left">
          <Image src={achievement} alt="achievement" width={600} />
        </aside>

        <aside className="relative h-full" data-animate="fade-in-right">
          <div className="lg:absolute top-0 bottom-0 my-auto h-fit lg:w-[110%] right-0 bg-white shadow-lg rounded-sm">
            {/* 👉 Swiper */}
            <Swiper
              modules={[Pagination]}
              pagination={{
                el: ".custom-pagination", // external pagination
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} custom-dot"></span>`;
                },
              }}
            >
              <SwiperSlide className="p-4 md:p-8 lg:p-12">
                <h4>Artist & Investor</h4>
                <p className="mt-4 mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, architecto! Est facere ducimus error doloribus quae
                  debitis facilis, ea eligendi.
                </p>
                <Link
                  className="text-indigo-600 flex gap-2 items-center"
                  href={"#"}
                >
                  Read Full Story <FaArrowRight />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="p-4 md:p-8 lg:p-12">
                <h4>Artist & Investor</h4>
                <p className="mt-4 mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, architecto! Est facere ducimus error doloribus quae
                  debitis facilis, ea eligendi.
                </p>
                <Link
                  className="text-indigo-600 flex gap-2 items-center"
                  href={"#"}
                >
                  Read Full Story <FaArrowRight />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="p-4 md:p-8 lg:p-12">
                <h4>Artist & Investor</h4>
                <p className="mt-4 mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, architecto! Est facere ducimus error doloribus quae
                  debitis facilis, ea eligendi.
                </p>
                <Link
                  className="text-indigo-600 flex gap-2 items-center"
                  href={"#"}
                >
                  Read Full Story <FaArrowRight />
                </Link>
              </SwiperSlide>
              <SwiperSlide className="p-4 md:p-8 lg:p-12">
                <h4>Artist & Investor</h4>
                <p className="mt-4 mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, architecto! Est facere ducimus error doloribus quae
                  debitis facilis, ea eligendi.
                </p>
                <Link
                  className="text-indigo-600 flex gap-2 items-center"
                  href={"#"}
                >
                  Read Full Story <FaArrowRight />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </aside>
      </div>
      {/* 👉 Place this ANYWHERE (dots will appear here) */}
      <div className="flex justify-center mt-10 lg:mt-20 gap-2">
        <div className="custom-pagination mt-6 flex gap-2"></div>
      </div>
    </section>
  );
};

export default Events;
