"use client";

import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Testimonials = () => {
  const testimonials = [
    {
      icons: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.6667 32L24 45.3333H40L33.3333 58.6667"
            stroke="#0546D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53.3333 46.9525C57.3165 45.3919 61.3333 41.8367 61.3333 34.6663C61.3333 23.9997 52.4445 21.333 48 21.333C48 15.9997 48 5.33301 32 5.33301C16 5.33301 16 15.9997 16 21.333C11.5555 21.333 2.66666 23.9997 2.66666 34.6663C2.66666 41.8367 6.6834 45.3919 10.6667 46.9525"
            stroke="#0546D2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "John Doe",
      position: "CEO, Company",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      icons: "",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Jane Smith",
      position: "CTO, Organization",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      icons: "",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Alice Johnson",
      position: "Manager, Business",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      icons: "",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Bob Brown",
      position: "Director, Enterprise",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      icons: "",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Charlie Davis",
      position: "Founder, Startup",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      icons: "",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Diana Evans",
      position: "Lead, Tech Firm",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];
  return (
    <section className="bg-[#155ADA] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container items-center gap-4">
        <aside className="lg:col-span-2">
          <h4 data-animate="fade-in-left">Lorem ipsum dolor sit</h4>
          <h2
            className="uppercase mt-2 mb-4 lg:mt-5 lg:mb-5"
            data-animate="fade-in-left"
          >
            Lorem ipsum dolor sit amet
          </h2>
          <p data-animate="fade-in-left">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>
        </aside>
        <aside className="flex lg:justify-end">
          <Button className="bg-white! border-white text-primary!">
            Explore More
          </Button>
        </aside>
      </div>
      <div className="py-10 lg:py-20 px-4">
        <Swiper
          className="container px-4 lg:overflow-visible!"
          spaceBetween={24}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
          //   loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white text-black rounded-lg p-6 flex flex-col justify-between h-[350px] transition-transform duration-700"
            >
              <div>
                <p className="mb-4">&quot;{testimonial.text}&quot;</p>
              </div>
              <div className="flex items-center mt-4">
                <Image
                  width={64}
                  height={64}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 aspect-square rounded-full mr-4"
                />
                <div>
                  <h5 className="font-bold">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex container gap-6">
        <div
          className="border border-white w-12 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-primary"
          id="prev"
        >
          <FaChevronLeft />
        </div>
        <div
          className="border border-white w-12 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-primary"
          id="next"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
