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
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.3333 46.9525C57.3165 45.3919 61.3333 41.8367 61.3333 34.6663C61.3333 23.9997 52.4445 21.333 48 21.333C48 15.9997 48 5.33301 32 5.33301C16 5.33301 16 15.9997 16 21.333C11.5555 21.333 2.66666 23.9997 2.66666 34.6663C2.66666 41.8367 6.6834 45.3919 10.6667 46.9525"
            stroke="#0546D2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "John Doe",
      position: "CEO, Company",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
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
            d="M12.3599 38.4403L15.1306 32.5656C15.4862 31.8115 16.5138 31.8115 16.8694 32.5656L19.6401 38.4403L25.8362 39.3883C26.6312 39.5099 26.948 40.5325 26.3725 41.1195L21.8899 45.6891L22.9478 52.1448C23.0837 52.9739 22.2522 53.6059 21.5408 53.2144L16 50.1648L10.4592 53.2144C9.74784 53.6059 8.91635 52.9739 9.05221 52.1448L10.1101 45.6891L5.62747 41.1195C5.05192 40.5325 5.36877 39.5099 6.16376 39.3883L12.3599 38.4403Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.3597 38.4403L47.1307 32.5656C47.4861 31.8115 48.5139 31.8115 48.8693 32.5656L51.6403 38.4403L57.8363 39.3883C58.6312 39.5099 58.948 40.5325 58.3725 41.1195L53.8899 45.6891L54.9477 52.1448C55.0837 52.9739 54.2523 53.6059 53.5408 53.2144L48 50.1648L42.4592 53.2144C41.7477 53.6059 40.9163 52.9739 41.0523 52.1448L42.1101 45.6891L37.6275 41.1195C37.052 40.5325 37.3688 39.5099 38.1637 39.3883L44.3597 38.4403Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.3597 14.4404L31.1307 8.56562C31.4861 7.81146 32.5139 7.81146 32.8693 8.56562L35.6403 14.4404L41.8363 15.3883C42.6312 15.5099 42.948 16.5326 42.3725 17.1194L37.8899 21.689L38.9477 28.1448C39.0837 28.9739 38.2523 29.6059 37.5408 29.2144L32 26.1647L26.4592 29.2144C25.7478 29.6059 24.9163 28.9739 25.0522 28.1448L26.1101 21.689L21.6275 17.1194C21.0519 16.5326 21.3688 15.5099 22.1638 15.3883L28.3597 14.4404Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Jane Smith",
      position: "CTO, Organization",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
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
            d="M45.3333 58.6663H18.6667C15.7211 58.6663 13.3333 56.2786 13.3333 53.333V29.8175C13.3333 29.5015 13.2398 29.1927 13.0646 28.9298L8.26872 21.7361C8.09349 21.4732 8 21.1644 8 20.8486V6.93301C8 6.04935 8.71635 5.33301 9.6 5.33301H14.4C15.2837 5.33301 16 6.04935 16 6.93301V11.733C16 12.6167 16.7163 13.333 17.6 13.333H25.0667C25.9503 13.333 26.6667 12.6167 26.6667 11.733V6.93301C26.6667 6.04935 27.3829 5.33301 28.2667 5.33301H35.7333C36.6171 5.33301 37.3333 6.04935 37.3333 6.93301V11.733C37.3333 12.6167 38.0496 13.333 38.9333 13.333H46.4C47.2837 13.333 48 12.6167 48 11.733V6.93301C48 6.04935 48.7163 5.33301 49.6 5.33301H54.4C55.2837 5.33301 56 6.04935 56 6.93301V20.8486C56 21.1644 55.9064 21.4732 55.7312 21.7361L50.9355 28.9298C50.7603 29.1927 50.6667 29.5015 50.6667 29.8175V53.333C50.6667 56.2786 48.2789 58.6663 45.3333 58.6663Z"
            stroke="#155ADA"
            strokeWidth="1.5"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Alice Johnson",
      position: "Manager, Business",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
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
            d="M24 5.33301H40"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 26.667V37.3337"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 58.6667C43.7822 58.6667 53.3334 49.1155 53.3334 37.3333C53.3334 25.5513 43.7822 16 32 16C20.2179 16 10.6667 25.5513 10.6667 37.3333C10.6667 49.1155 20.2179 58.6667 32 58.6667Z"
            stroke="#155ADA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Bob Brown",
      position: "Director, Enterprise",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
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
            strokeWidth="1.5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53.3333 46.9525C57.3165 45.3919 61.3333 41.8367 61.3333 34.6663C61.3333 23.9997 52.4445 21.333 48 21.333C48 15.9997 48 5.33301 32 5.33301C16 5.33301 16 15.9997 16 21.333C11.5555 21.333 2.66666 23.9997 2.66666 34.6663C2.66666 41.8367 6.6834 45.3919 10.6667 46.9525"
            stroke="#0546D2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Charlie Davis",
      position: "Founder, Startup",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
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
            d="M12.3599 38.4403L15.1306 32.5656C15.4862 31.8115 16.5138 31.8115 16.8694 32.5656L19.6401 38.4403L25.8362 39.3883C26.6312 39.5099 26.948 40.5325 26.3725 41.1195L21.8899 45.6891L22.9478 52.1448C23.0837 52.9739 22.2522 53.6059 21.5408 53.2144L16 50.1648L10.4592 53.2144C9.74784 53.6059 8.91635 52.9739 9.05221 52.1448L10.1101 45.6891L5.62747 41.1195C5.05192 40.5325 5.36877 39.5099 6.16376 39.3883L12.3599 38.4403Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.3597 38.4403L47.1307 32.5656C47.4861 31.8115 48.5139 31.8115 48.8693 32.5656L51.6403 38.4403L57.8363 39.3883C58.6312 39.5099 58.948 40.5325 58.3725 41.1195L53.8899 45.6891L54.9477 52.1448C55.0837 52.9739 54.2523 53.6059 53.5408 53.2144L48 50.1648L42.4592 53.2144C41.7477 53.6059 40.9163 52.9739 41.0523 52.1448L42.1101 45.6891L37.6275 41.1195C37.052 40.5325 37.3688 39.5099 38.1637 39.3883L44.3597 38.4403Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.3597 14.4404L31.1307 8.56562C31.4861 7.81146 32.5139 7.81146 32.8693 8.56562L35.6403 14.4404L41.8363 15.3883C42.6312 15.5099 42.948 16.5326 42.3725 17.1194L37.8899 21.689L38.9477 28.1448C39.0837 28.9739 38.2523 29.6059 37.5408 29.2144L32 26.1647L26.4592 29.2144C25.7478 29.6059 24.9163 28.9739 25.0522 28.1448L26.1101 21.689L21.6275 17.1194C21.0519 16.5326 21.3688 15.5099 22.1638 15.3883L28.3597 14.4404Z"
            stroke="#155ADA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a eveniet tempora sed magnam doloribus totam nam, esse voluptatum animi doloremque libero in quia natus architecto molestiae, fugiat voluptate. Odio!",
      name: "Diana Evans",
      position: "Lead, Tech Firm",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];
  return (
    <section className="bg-[#155ADA] text-white" id="testimonials">
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
              {testimonial.icons}
              {/* <div> */}
              <p className="my-4">&quot;{testimonial.text}&quot;</p>
              {/* </div> */}
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
