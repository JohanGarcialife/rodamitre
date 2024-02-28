import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Distribuidores() {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className="bg-[#f5f5f5] text-black relative flex justify-between py-10 px-12 font-montserrat"
      id="marcas"
    >
      <div className="w-1/4">
        <p className="text-gris mb-3 text-lg">DISTRIBUIDOR OFICIAL:</p>
        <div className="h-1 w-1/4 bg-gris "></div>
      </div>
      <div className="w-3/4">
        <Slider {...settings}>
          <Logos />
          <Logos2 />
        </Slider>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <div className="w-full flex items-center justify-between font-montserrat">
      <Image
        src="/logo-timken-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-400 "
      />
      <Image
        src="/logo-dayco-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-500 "
      />
      <Image
        src="/logo-frasle-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-600 "
      />
      <Image
        src="/logo-fremax-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-700 "
      />
    </div>
  );
}

function Logos2() {
  return (
    <div className="w-full flex items-center justify-between font-montserrat">
      <Image
        src="/logo-mahle-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up"
      />
      <Image
        src="/logo-hescher-2.png"
        height={88}
        width={177}
        alt="logo"
        className=""
      />
      <Image
        src="/logo-peer-2.png"
        height={88}
        width={177}
        alt="logo"
        className=""
      />
      <Image
        src="/logo-cofap-2.png"
        height={88}
        width={177}
        alt="logo"
        className=""
      />
    </div>
  );
}
