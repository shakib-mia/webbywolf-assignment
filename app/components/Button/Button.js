import Link from "next/link";
import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;
  // console.log(props);
  return (
    <>
      {props.href ? (
        <Link
          className={`inline-block font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-white border-2 border-primary hover:text-primary transition cursor-pointer font-gilroy-medium ${className}`}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <>
          <button
            className={`inline-block font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-white border-2 border-primary hover:text-primary transition cursor-pointer font-gilroy-medium ${className}`}
            {...rest}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
