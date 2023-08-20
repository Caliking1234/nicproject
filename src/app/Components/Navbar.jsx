import React from "react";
import DropDown from "./Dropdown";
import Image from "next/image";
import logo from "../../../public//Images/logo1.png";
import logo2 from "../../../public//Images/logo3.png";
import nav1 from "../../../public/Images/nav1.png";
import nav2 from "../../../public/Images/nav2.png";
import nav3 from "../../../public/Images/nav3.png";
import nav4 from "../../../public/Images/nav4.png";
import nav5 from "../../../public/Images/nav5.png";
import facebook from "../../../public/Images/facebook.png";
import twitter from "../../../public/Images/twitter.png";

const Navbar = () => {
  return (
    <div className=" w-full">
      <div className=" w-full px-5 bg-gray-300">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row p-2 gap-2">
            <Image src={facebook} width={20} height={20} />
            <Image src={twitter} width={20} height={20} />
          </div>
          <div className="flex flex-row p-2 text-black">
            <div className="border-r-[1px] border-gray-700 px-2">
              Skip to main content
            </div>
            <div className="border-r-[1px] border-gray-700 px-2">sign in</div>
            <div className="border-r-[1px] border-gray-700 px-2">register</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-white py-1 px-3 flex flex-row items-center justify-around">
        <div className="flex flex-row">
          <Image src={logo} height={50} width={100} />
          <Image src={logo2} height={50} width={500} />
        </div>
        {/* <DropDown /> */}
        <div className=" flex flex-row items-center justify-evenly gap-5 w-1/2">
          <div className=" flex flex-col items-center justify-center gap-3">
            <div className=" w-11 h-11 rounded-full bg-gray-200 shadow-md shadow-black flex items-center justify-center">
              <div className=" w-9 h-9 rounded-full bg-gray-500 shadow-md shadow-black flex items-center justify-center">
                <Image src={nav1} width={30} height={30} />
              </div>
            </div>
            <div className=" text-gray-500">TOPIC</div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <div className=" w-11 h-11 rounded-full bg-gray-200 shadow-md shadow-black flex items-center justify-center">
              <div className=" w-9 h-9 rounded-full bg-gray-500 shadow-md shadow-black flex items-center justify-center">
                <Image src={nav2} width={30} height={30} />
              </div>
            </div>
            <div className=" text-gray-500">SERVICES</div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <div className=" w-11 h-11 rounded-full bg-gray-200 shadow-md shadow-black flex items-center justify-center">
              <div className=" w-9 h-9 rounded-full bg-gray-500 shadow-md shadow-black flex items-center justify-center">
                <Image src={nav3} width={30} height={30} />
              </div>
            </div>
            <div className=" text-gray-500">MY GOVERNMENT</div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <div className=" w-11 h-11 rounded-full bg-gray-200 shadow-md shadow-black flex items-center justify-center">
              <div className=" w-9 h-9 rounded-full bg-gray-500 shadow-md shadow-black flex items-center justify-center">
                <Image src={nav4} width={30} height={30} />
              </div>
            </div>
            <div className=" text-gray-500">PEOPLE GROUPS</div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <div className=" w-11 h-11 rounded-full bg-gray-200 shadow-md shadow-black flex items-center justify-center">
              <div className=" w-9 h-9 rounded-full bg-gray-500 shadow-md shadow-black flex items-center justify-center">
                <Image src={nav5} width={30} height={30} />
              </div>
            </div>
            <div className=" text-gray-500">INDIA AT A GLANCE</div>
          </div>
        </div>
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
      <div className=" px-12 py-5 bg-[#2572C5] flex flex-row gap-8 items-center justify-around">
        <div className=" bg-[#5996D9] py-1 px-2 flex flex-row">
          <div>
            <input
              type="search"
              placeholder="Search a keyword"
              className=" py-2 px-3"
            />
            <button className=" px-3 py-2 bg-orange-400">Search</button>
          </div>
          <div className="px-5 py-2">Advanced Search</div>
        </div>
        <div>
          Most Searched
        </div>
        <div className="flex flex-row p-2">
            <div className="border-r-[1px] border-white px-2">
              Birtc Certificate
            </div>
            <div className="border-r-[1px] border-white px-2">Driving Licence</div>
            <div className="border-r-[1px] border-white px-2">PAN Card</div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
