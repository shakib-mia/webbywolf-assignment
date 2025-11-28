import React from "react";
import InputField from "../Inputfield/Inputfield";
import Link from "next/link";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const inputFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: false,
    },
    {
      id: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Enter your email",
      required: false,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: false,
    },
    {
      id: "timeFrame",
      label: "Time Frame",
      type: "text",
      placeholder: "Enter time frame",
      required: true,
    },
    {
      id: "size",
      label: "Size",
      type: "text",
      placeholder: "Enter size",
      required: true,
    },
    {
      id: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "Enter quantity",
      required: true,
    },
  ];

  return (
    <section className="container">
      <h2 className="uppercase mx-auto text-center lg:w-7/12">
        REQUEST A QUOTE
      </h2>

      <form className="lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-9 mb-9">
          {inputFields.map((field, key) => (
            <InputField {...field} order={key} key={key} />
          ))}
        </div>
        <InputField
          textarea
          id="projectDetails"
          label="Please Describe Your Project*"
          name="projectDetails"
          placeholder="Provide more details about your project..."
          rows={6}
        />

        <p className="text-center mt-10" data-animate="fade-in-up">
          By submitting this form you agree to our{" "}
          <Link
            className="underline hover:no-underline underline-offset-[6px]"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="underline hover:no-underline underline-offset-[6px]"
            href={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex justify-center mt-12" data-animate="fade-in-up">
          <Button className="flex! gap-2 items-center" data-delay="200">
            Get Started <FaArrowRight />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
