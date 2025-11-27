import React from "react";
import bikes from "./../../assets/bikes.jpg";
import Image from "next/image";
import bike1 from "./../../assets/bike1.jpg";
import bike2 from "./../../assets/bike2.jpg";
import bike3 from "./../../assets/bike3.jpg";
import Button from "../Button/Button";
import { FiPhone } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const Bikes = () => {
  const bikesData = [
    {
      img: bike1,
      alt: "Bike 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    },
    {
      img: bike2,
      alt: "Bike 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    },
    {
      img: bike3,
      alt: "Bike 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    },
  ];
  return (
    <section className="container bg-white/60">
      <div className="shadow-xl p-8 relative">
        <div className="w-full h-3 lg:h-5 bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] absolute top-full left-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          <aside>
            <h4 className="text-blue-800" data-animate="fade-in-left">
              Lorem ipsum dolor sit
            </h4>
            <h2
              className="lg:w-7/12 uppercase my-4 lg:my-5"
              data-animate="fade-in-left"
            >
              Lorem ipsum dolor sit amet
            </h2>
            <p data-animate="fade-in-left">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>

            <ul className="my-8 lg:mt-14 lg:mb-20 space-y-6">
              {bikesData.map(({ img, alt, description }, index) => (
                <li
                  className="flex gap-3 lg:gap-7 items-center"
                  key={index}
                  data-animate="fade-in-left"
                >
                  <Image
                    src={img}
                    alt={alt}
                    width={146}
                    className="w-1/4 aspect-square object-cover"
                  />
                  <p className="w-3/4">{description}</p>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 lg:gap-5 items-center">
              <Button
                className="flex! gap-2 items-center"
                data-animate="fade-in-left"
                data-delay="200"
              >
                Get Started <FaArrowRight />
              </Button>
              <a
                href="tel:123456789"
                className="flex text-primary text-base lg:text-xl items-center gap-1 lg:gap-2 font-semibold"
                data-animate="fade-in-left"
              >
                <FiPhone />
                123456789
              </a>
            </div>
          </aside>

          <aside>
            <Image
              src={bikes}
              width={500}
              alt="bikes"
              className="w-full h-11/12"
              data-animate="fade-in-right"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Bikes;
