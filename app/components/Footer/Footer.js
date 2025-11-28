import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#171E2B] text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <aside
          data-animate="fade-in-up"
          data-delay="0"
          className="lg:col-span-2"
        >
          <Link
            href="/"
            className="lg:text-2xl bg-gray-400 px-4 py-2 text-white font-inter font-extrabold cursor-pointer inline-block"
          >
            Logo
          </Link>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            blanditiis officia eos quae dicta tempora nulla nihil sed
          </p>
        </aside>

        <aside data-animate="fade-in-up" data-delay="100">
          <h4>Quick Links</h4>
          <ul className="mt-2 lg:mt-4">
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
          </ul>
        </aside>
        <aside data-animate="fade-in-up" data-delay="200">
          <h4>Quick Links</h4>
          <ul className="mt-2 lg:mt-4">
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
          </ul>
        </aside>
        <aside data-animate="fade-in-up" data-delay="300">
          <h4>Quick Links</h4>
          <ul className="mt-2 lg:mt-4">
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
          </ul>
        </aside>
        <aside data-animate="fade-in-up" data-delay="400">
          <h4>Quick Links</h4>
          <ul className="mt-2 lg:mt-4">
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="#">Lorem, ipsum.</a>
            </li>
          </ul>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
