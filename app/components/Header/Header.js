import React from "react";
import hero from "./../../assets/hero.jpg";
import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="relative">
      <header className="grid grid-cols-1 lg:grid-cols-2 container items-center gap-4 lg:h-screen pt-24 pb-16 lg:py-0">
        <aside>
          <h1 className="lg:w-5/6" data-animate="fade-in-left">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="py-5" data-animate="fade-in-left" data-delay="200">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>

          <form className="flex gap-1 lg:mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md w-2/3 lg:w-1/2"
              data-animate="fade-in-left"
              data-delay="600"
            />
            <button
              type="submit"
              className="bg-[#1959AC] text-white p-3 flex gap-1 items-center rounded-md hover:bg-[#134485] transition-colors cursor-pointer"
              data-animate="fade-in-left"
              data-delay="400"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
          <div className="flex gap-1 items-center mt-4">
            <div
              className="w-7 aspect-square bg-blue-700 rounded-full text-white flex justify-center items-center"
              data-animate="bounce-in"
              data-delay="800"
            >
              <FaCheck />
            </div>
            <p data-animate="fade-in" data-duration="1000">
              No credit card required!
            </p>
          </div>
        </aside>
        <aside className="absolute w-1/2 justify-end right-0 top-0 h-full hidden lg:flex">
          <Image
            width={500}
            height={500}
            className="w-full object-cover"
            data-animate="fade-in"
            src={hero.src}
            alt="hero"
          />
        </aside>
      </header>

      <div className="absolute w-screen h-0 lg:h-40 left-0 bottom-0 bg-linear-to-t from-white via-70% via-white/60 to-transparent"></div>
    </div>
  );
};

export default Header;
