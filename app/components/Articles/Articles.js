import React from "react";
import bg from "./../../assets/articles-bg.png";
import article1 from "./../../assets/articles/article1.png";
import article2 from "./../../assets/articles/article2.png";
import article3 from "./../../assets/articles/article3.png";
import article4 from "./../../assets/articles/article4.png";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  const articles = [
    {
      image: article1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      link: "#",
    },
    {
      image: article2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      link: "#",
    },
    {
      image: article3,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      link: "#",
    },
    {
      image: article4,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      link: "#",
    },
  ];
  return (
    <section
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <h4 className="text-blue-800" data-animate="fade-in-left">
          Lorem ipsum dolor sit
        </h4>
        <h2
          className="lg:w-7/12 uppercase my-4 lg:my-5"
          data-animate="fade-in-left"
        >
          Lorem ipsum dolor sit amet
        </h2>
        <p className="w-7/12" data-animate="fade-in-left">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12">
          {articles.map(({ image, title, description }, index) => (
            <article
              key={index}
              className="border border-[#F1F0F0] bg-white rounded-xl overflow-hidden"
              data-animate="fade-in-up"
            >
              <Image
                src={image}
                width={600}
                height={400}
                alt={`article-${index + 1}`}
                className={`w-full h-auto object-cover aspect-video ${
                  index === 1
                    ? "object-[0%_65%]"
                    : index === 2
                    ? "object-[0%_25%]"
                    : ""
                }`}
              />
              <div className="p-4 pt-7">
                <h3 className="mt-6">{title}</h3>
                <p className="mt-4">{description}</p>

                <Link
                  href="#"
                  className="inline-block mt-6 text-blue-800 font-semibold border-b-2 border-blue-800 hover:border-transparent transition-[border-color] duration-300"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
