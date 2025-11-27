"use client";
import React from "react";

const InputField = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder = "",
    type = "text",
    textarea = false, // if true → render textarea
    rows = 4,
    required,
    id,
    className = "",
    order,
    ...rest
  } = props;

  // console.log({ order:  });

  return (
    <div
      className="flex flex-col gap-2"
      data-animate={
        !textarea
          ? order % 2
            ? "fade-in-right"
            : "fade-in-left"
          : "fade-in-up"
      }
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
      )}

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          rows={rows}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
          className={`bg-[#F4F4F4] resize-none ring-1 ring-[#9F9F9F] rounded p-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
          className={`bg-[#F4F4F4] ring-1 ring-[#9F9F9F] rounded p-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
