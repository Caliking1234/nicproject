import React from "react";
import DropDown from "./Dropdown";
import Image from "next/image";
import logo from "../../../public//Images/logo1.png"
import logo2 from "../../../public//Images/logo3.png"


const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#E3BC9A] py-1 px-3 flex flex-row items-center justify-around">
      <div className="flex flex-row">
        {/* <h1 className=" text-3xl font-bold text-white">
          Department of Prosecution
        </h1> */}
        <Image src={logo} height={50} width={100}/>
        <Image src={logo2} height={50} width={500}/>

      </div>
      <DropDown />
      <div className=" block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
