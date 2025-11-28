import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Bikes from "./components/Bikes/Bikes";
import bg1 from "./assets/bg1.png";
import bg from "./assets/articles-bg.png";

import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners";
import Articles from "./components/Articles/Articles";
import Banner2 from "./components/Banner2/Banner2";
import Contact from "./components/Contact/Contact";
import DownloadAppCTA from "./components/DownloadAppCTA/DownloadAppCTA";
import GroupedBike from "./components/GroupedBike/GroupedBike";
import Showcase from "./components/Showcase/Showcase";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div
        className="bg-cover bg-center lg:pb-36 pb-20 md:pb-28 bg-no-repeat"
        style={{ backgroundImage: `url(${bg1.src})` }}
      >
        <Bikes />
        <About />
      </div>

      <Banner />
      <Partners />
      <Articles />
      <Banner2 />
      <Contact />
      <DownloadAppCTA />
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-size-[100%_107%] bg-top bg-no-repeat pb-16 lg:pb-44"
      >
        <GroupedBike />
        <Showcase />
      </div>
      <Testimonials />
    </>
  );
}
