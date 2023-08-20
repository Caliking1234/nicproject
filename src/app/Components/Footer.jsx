import React from "react";
import Link from "next/link";
import { DropDownMenu } from "../DropDownMenu";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
function Footer() {
  return (
    <>
      <div className="bg-[#E3BC9A] h-1/2 w-full flex flex-col justify-around items-center py-4 px-5 md:px-8">
        <div className=" py-5 md:p-5 grid grid-cols-2 md:grid-cols-4 w-full gap-5">
          {DropDownMenu?.map((items, index) => {
            return (
              <div key={index} className=" md:mx-auto w-full md:w-[70%]">
                <FooterLinks title={items.title} list1={items.Link} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center text-center  py-5 bg-[#E3BC9A]">
        <h1 className=" text-white text-xs mr-[2px]">©2023-2024</h1>
        <h1 className=" text-white text-xs hover:text-blue-300">
          All rights reserved Department of Prosecution{" "}
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center text-center  py-5 bg-[#E3BC9A] border-t-[1px] border-white">
        <Link
          href="/privacy&policy"
          className=" cursor-pointer text-xs text-white hover:text-blue-300"
        >
          Privacy & Policy
        </Link>
        <div className=" h-[20px] w-[2px] mx-[12px] bg-white"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-white hover:text-blue-300"
        >
          Term & Condition
        </Link>
        <div className=" h-[20px] w-[2px] mx-[12px] bg-white"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-white hover:text-blue-300"
        >
          Disclaimer
        </Link>
        <div className=" h-[20px] w-[2px] mx-[12px] bg-white"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-white hover:text-blue-300"
        >
          Accessibility Options
        </Link>
        <div className=" h-[20px] w-[2px] mx-[12px] bg-white"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-white hover:text-blue-300"
        >
          Hyper Linking Policy
        </Link>
      </div>
    </>
  );
}

export default Footer;
