import React from "react";
import groupedBikeBg from "../../assets/grouped-bike-bg.png";
import bike1 from "../../assets/grouped-bike/bike-1.jpg";
import bike2 from "../../assets/grouped-bike/bike-2.jpg";
import bike3 from "../../assets/grouped-bike/bike-3.jpg";
import bike4 from "../../assets/grouped-bike/bike-4.jpg";
import bike5 from "../../assets/grouped-bike/bike-5.jpg";

import Image from "next/image";

const GroupedBike = () => {
  return (
    <section>
      <div className="bg-[#F1F5F9] py-8 md:py-12 lg:py-16 lg:pb-0!">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <aside
            className="bg-size-[0%] lg:bg-size-[152%] bg-no-repeat bg-bottom-right h-full"
            style={{ backgroundImage: `url(${groupedBikeBg.src})` }}
          >
            <div className="lg:w-2/3">
              <h4 className="text-blue-800" data-animate="fade-in-left">
                Lorem ipsum dolor sit
              </h4>
              <h2
                className="uppercase mt-3 mb-4 lg:mt-5 lg:mb-5"
                data-animate="fade-in-left"
              >
                Lorem ipsum dolor sit amet
              </h2>
              <p data-animate="fade-in-left">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>
            </div>
          </aside>

          <aside className="grid-cols-3 gap-4 lg:gap-7 grid">
            <Image
              src={bike3}
              alt="bike3"
              className="w-full"
              width={100}
              data-animate="fade-in-right"
            />
            <Image
              src={bike2}
              className="col-span-2 w-full h-full object-cover"
              alt="bike3"
              width={100}
              data-animate="fade-in-right"
              data-delay="100"
            />
            <Image
              src={bike1}
              alt="bike1"
              className="w-full col-span-3"
              width={600}
              data-animate="fade-in-right"
            />

            <Image
              src={bike5}
              alt="bike5"
              className="w-full"
              width={600}
              data-animate="fade-in-right"
            />
            <Image
              src={bike4}
              alt="bike4"
              className="w-full col-span-2 h-full object-cover object-bottom"
              width={600}
              data-animate="fade-in-right"
              data-delay="100"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default GroupedBike;
