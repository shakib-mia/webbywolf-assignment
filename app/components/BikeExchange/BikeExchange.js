import React from "react";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import sectionImage from "./../../assets/prabheshsharma_A_hyper-realistic_camera_raw_image_of_two_middle_480d91ab-2d67-4562-a5e9-f947be7de28f 1.jpg";
import Image from "next/image";

const BikeExchange = () => {
  return (
    <section className="bg-[#F1F1F1] relative">
      <div className="w-full h-3 lg:h-5 bg-linear-to-r from-[#043898] via-[#079902] to-[#170041] absolute -bottom-1.5 mx-4 lg:-bottom-2.5 left-0 right-0 container lg:mx-auto"></div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <aside>
          <h2 className="text-[#1959AC]" data-animate="fade-in-left">
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
          </h2>
          <p className="pt-5 pb-5 lg:pb-10" data-animate="fade-in-left">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </p>
          <Button
            className="flex! gap-2 items-center"
            data-animate="fade-in-left"
          >
            Get Started <FaArrowRight />
          </Button>

          <div className="relative mt-11" data-animate="fade-in-up">
            <div className="lg:absolute p-10 bg-white shadow-lg">
              <h4>Lorem ipsum dolor sit</h4>
              <div className="mt-5 lg:mt-10 space-y-2 lg:space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  sequi quo, incidunt laborum!
                </p>
                <p>
                  Temporibus excepturi officia dolore alias quae repellat,
                  maiores laboriosam,
                </p>
                <p>
                  Nesciunt, minus corrupti totam obcaecati est, quibusdam
                  possimus quia tenetur, consequatur
                </p>
              </div>
            </div>
          </div>
        </aside>
        <aside>
          <Image
            src={sectionImage}
            alt="section image"
            data-animate="fade-in-right"
            width={600}
          />
        </aside>
      </div>
    </section>
  );
};

export default BikeExchange;
