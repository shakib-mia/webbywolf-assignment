import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Bikes from "./components/Bikes/Bikes";
import bg1 from "./assets/bg1.png";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";

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
    </>
  );
}
