"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import img1 from "../../../public/Images/img1.png";
import img2 from "../../../public/Images/prosecution.jpg";
import img3 from "../../../public/Images/img3.jpeg";

import Image from "next/image";

const ImgSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    centerMode: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Wrap = styled.div`
    cursor: pointer;
    height: 85vh;
    img {
      //border: 4px solid black;
      width: 100%;
      height: 100%;

      transition-duration: 500ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`
    .slick-list {
      overflow: hidden;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;
      padding-right: 20px;
    }
    .slick-dots li button:before {
      font-size: 30px;
      color: white;
    }

    .slick-next {
      right: 10px;
      opacity: 0;
    }
    .slick-prev {
      left: 10px;
      opacity: 0;
    }
    .slick-next {
      padding: 50px;
    }
    .slick-next:before {
    }
    .slick-prev:before {
    }
  `;

  return (
    <div className=" w-full h-full relative">
      <div className=" absolute top-0 left-0 bg-gray-800 min-w-full min-h-full -z-10"></div>
      <Carousel
        {...settings}
        className=" -z-0 absolute top-0 left-0 w-full h-full"
      >
        <Wrap className="">
          <Image
            // src={"https://cdn.pixabay.com/photo/2019/04/10/20/54/police-4118199_1280.png"}
            src={img1}
            className=" w-screen h-[calc(100vh-100px)] -z-20"
            width={1000}
            height={800}
            alt="badag"
          />
          <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white w-full text-left p-5">
            <div className="">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Welcome to UP Prosecution
              </h1>
              <p className=" mb-5 text-xs md:text-sm">
                Any challenges in digital and involving use of technology?We can
                help you out
              </p>
            </div>
          </div>
        </Wrap>

        <Wrap className=" relative">
          <Image
            // src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4m9aXzzXzPVB_gh8-gA55S1WLEOZhKRKZ0vHSIjY1EoWzl3BnfD8We_fBLehKJ7qHGA&usqp=CAU"}
            src={img2}
            className=" w-screen h-[calc(100vh-100px)] -z-20"
            width={1000}
            height={800}
            alt="badag"
          />
          <div className=" absolute  top-[50%] translate-y-[-50%] text-white w-full text-left p-5">
            <div className="">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Technology Agnostic
              </h1>
              <p className=" mb-5 text-xs md:text-sm">
                We dont focus on technologies, we focus on solution whatever
                technology it takes
              </p>
            </div>
          </div>
        </Wrap>

        <Wrap className="relative">
          <Image
            // src={"https://cdn.pixabay.com/photo/2019/04/10/20/54/police-4118199_1280.png"}
            src={img3}
            className=" w-screen h-[calc(100vh-100px)] -z-20"
            width={1000}
            height={800}
            alt="badag"
          />
          <div className=" absolute  top-[50%] translate-y-[-50%] text-white w-full text-left p-5">
            <div className="">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Dotclu recognised as Leader in
              </h1>
              <h1 className=" text-2xl my-5  font-extrabold">
                the Zinnov Zones ER&D report,2022
              </h1>
              <p className=" mb-5 text-xs md:text-sm">
                Adjust The Customer&apos;s IT Infrastructure To New,Ever Growing
                Business & Technical Requirements
              </p>
            </div>
          </div>
        </Wrap>

        <Wrap className="relative">
          <Image
            // src={"https://www.wcwonline.org/images/stories/news/ladyjusticebronze.jpg"}
            src={img1}
            className=" max-w-screen h-[calc(100vh-100px)] -z-20"
            width={1000}
            height={800}
            alt="badag"
          />
          <div className=" absolute top-[50%] translate-y-[-50%] text-white w-full text-left p-5">
            <div className="">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Webby 2023 Honoree
              </h1>
              <p className="text-xs md:text-sm">
                Globally recognised for Apps,dApps and Data Management
              </p>
              <p className=" mb-5 text-xs md:text-sm">Oscar Of Internet</p>
            </div>
          </div>
        </Wrap>
      </Carousel>
    </div>
  );
};

export default ImgSlider;
