import React from "react";
import about from "./../../assets/about.jpg";
import listItemIcon from "./../../assets/list-item-icon.png";
import Image from "next/image";

const About = () => {
  const aboutList = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center gap-8 md:gap-12">
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

            <ul className="mt-8 space-y-6">
              {aboutList.map(({ title, description }, index) => (
                <li
                  className="flex gap-4"
                  key={index}
                  data-animate="fade-in-left"
                >
                  <Image
                    src={listItemIcon}
                    alt="listItemIcon"
                    className="w-9 aspect-square h-9"
                  />
                  <aside className="space-y-2">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </aside>
                </li>
              ))}
            </ul>
          </aside>

          <aside>
            <Image
              src={about}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="about us"
              data-animate="fade-in"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
