import React from "react";
import confidential from "./../../assets/handshake.png";
import Image from "next/image";
import Tabs from "../Tabs/Tabs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import confidentialBg from "./../../assets/confidential-bg.svg";

const Confidential = () => {
  const tabData = [
    {
      label: "Research",
      content: (
        <>
          <p className="mb-4">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
          <Link className="text-indigo-600 flex gap-2 items-center" href={"#"}>
            Check Tools <FaArrowRight />
          </Link>
        </>
      ),
    },
    {
      label: "Plan",
      content: (
        <>
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            tenetur laboriosam voluptates. Iste veniam doloremque, fuga optio
            voluptas possimus quos neque explicabo numquam quae nostrum,
            accusantium
          </p>
          <Link className="text-indigo-600 flex gap-2 items-center" href={"#"}>
            Check Tools <FaArrowRight />
          </Link>
        </>
      ),
    },
    {
      label: "Design",
      content: (
        <>
          <p className="mb-4">
            Eius temporibus eligendi debitis, ea corrupti sunt incidunt omnis!
            Velit enim facere quaerat id fugit quibusdam cum esse vitae quasi
            accusamus, tempore, vero hic nulla ab architecto quis dicta iste
            odit! Vero accusamus ducimus itaque magnam!
          </p>
          <Link className="text-indigo-600 flex gap-2 items-center" href={"#"}>
            Check Tools <FaArrowRight />
          </Link>
        </>
      ),
    },
  ];
  return (
    <section
      className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-size-[176px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${confidentialBg.src})` }}
    >
      <aside className="order-2 lg:order-1">
        <h2 className="uppercase mb-4 lg:mb-6">Lorem ipsum dolor sit amet</h2>
        <Tabs tabs={tabData} />
      </aside>
      <aside className="order-1 lg:order-2">
        <Image
          src={confidential}
          alt="confidential"
          className="aspect-video object-cover object-center"
          data-animate="fade-in-right"
        />
      </aside>
    </section>
  );
};

export default Confidential;
