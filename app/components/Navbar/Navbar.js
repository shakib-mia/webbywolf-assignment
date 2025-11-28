"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [phoneNav, showPhoneNav] = useState(false);
  const { scrollDirection, lastScrollY } = useScrollDirection();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };
  const pathname = usePathname();

  const isHome = pathname === "/";

  // 🔹 Navbar items array
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",

      submenu: [
        { name: "Team", href: "/about#team" },
        { name: "History", href: "/about#history" },
      ],
    },
    {
      name: "Services",
      submenu: [
        { name: "Web Dev", href: "/services/web" },
        { name: "SEO", href: "/services/seo" },
      ],
    },
    { name: "Plans", href: "/plans" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-9999 py-4 font-rubik transition-all duration-300
        ${scrollDirection === "down" ? "-translate-y-52" : "translate-y-0"}
        ${
          lastScrollY > 0
            ? "bg-white text-black! shadow-lg"
            : isHome
            ? "bg-transparent text-black shadow-none"
            : "text-black! bg-transparent shadow-none"
        }
      `}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl bg-gray-400 px-4 py-2 text-white font-inter font-extrabold cursor-pointer"
        >
          Logo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-normal">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href || ""}
                className={`${
                  item.href === pathname && "text-purple-600"
                } hover:text-purple-600`}
              >
                {item.name}{" "}
                {item.submenu && (
                  <FaChevronDown className="inline-block ml-1 group-hover:rotate-180 transition-transform text-sm" />
                )}
              </Link>

              {/* Dropdown */}
              {item.submenu && (
                <div className="absolute left-0 top-0 pt-12 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-full">
                  <ul className="bg-white shadow-lg rounded min-w-[200px] z-50">
                    {" "}
                    {item.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block py-2 px-4 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA & Hamburger */}
        <div className="flex items-center">
          <Button
            className="hidden! md:block! bg-white! text-black! shadow-lg active:shadow-none border-none hover:bg-primary! hover:text-white!"
            href="#"
            target="_blank"
          >
            Get Started
          </Button>

          <button
            className="md:hidden focus:outline-none ml-2"
            onClick={() => showPhoneNav(!phoneNav)}
          >
            {phoneNav ? (
              <svg
                className="w-6 h-6 fill-white hover:fill-primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 fill-white hover:fill-primary"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden max-h-64 transition-[height] overflow-hidden ${
            phoneNav ? "h-96" : "h-0"
          }`}
        >
          <ul className="flex flex-col divide-y font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.name} className="py-1">
                <div
                  className="flex justify-between items-center px-4 cursor-pointer"
                  onClick={() => toggleSubmenu(item.name)}
                >
                  <span className="w-full">{item.name}</span>
                  {item.submenu && (
                    <span>
                      <FaChevronDown />
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && openSubmenu === item.name && (
                  <ul className="pl-8 bg-gray-50">
                    {item.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block py-2 px-4 hover:text-purple-600"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="container py-3">
              <Button
                href="#"
                target="_blank"
                className="inline-block w-full text-center border-0"
              >
                Sign In
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
