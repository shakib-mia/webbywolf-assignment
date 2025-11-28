import React from "react";
import screen from "./../../assets/Screen.png";
import Image from "next/image";
import googlePlay from "./../../assets/google-play.png";
import appStore from "./../../assets/app-store.png";
import Link from "next/link";

const DownloadAppCTA = () => {
  return (
    <section className="bg-[#F3F3F3] py-0!">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <aside className="py-8 md:py-12 lg:py-16">
            <h4 className="text-blue-800" data-animate="fade-in-left">
              Lorem ipsum dolor sit
            </h4>
            <h2 className="uppercase my-4 lg:my-5" data-animate="fade-in-left">
              Lorem ipsum dolor sit amet
            </h2>
            <p data-animate="fade-in-left">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>

            <div className="flex mt-16 gap-6 lg:w-7/12">
              <Link href={"#"} data-animate="fade-in-left" data-delay="100">
                <Image src={googlePlay} alt="Download on Google Play" />
              </Link>
              <Link href={"#"} data-animate="fade-in-left" data-delay="200">
                <Image src={appStore} alt="Download on App Store" />
              </Link>
            </div>
          </aside>
          <aside
            className="bg-contain bg-no-repeat bg-center"
            data-animate="fade-in-up"
            style={{ backgroundImage: `url(${screen.src})` }}
          ></aside>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppCTA;
