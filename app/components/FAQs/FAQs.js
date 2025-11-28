import React from "react";
import Accordion from "../Accordion/Accordion";

const FAQs = () => {
  const data = [
    {
      title: "What is Lorem Ipsum?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      title: "Why do we use it?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      title: "Where does it come from?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
  ];
  return (
    <div className="bg-[#FBFBFB]">
      <section className="container">
        <h2 className="text-center" data-animate="fade-in-left">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h2>
        <Accordion items={data} />
      </section>
    </div>
  );
};

export default FAQs;
