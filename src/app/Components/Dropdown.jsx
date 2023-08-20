"use client";
import React, { useEffect, useRef, useState } from "react";
import { DropDownMenu } from "../DropDownMenu";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const DropDown = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const router = usePathname();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== divRef.current) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div className=" hidden lg:flex flex-row items-center justify-center px-3">
      {DropDownMenu.map((menuInfo, index) => (
        <div
          key={index}
          className=" relative group flex flex-col justify-center items-center px-2 py-1 text-white"
        >
          <button ref={divRef} onClick={() => setIsOpen(!IsOpen)}>
            {menuInfo.title}{" "}
          </button>
          <div className="h-[1px] w-0 bg-white group-hover:min-w-[100%] transition-all duration-200 ease-in"></div>
          <div className=" invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in delay-100 top-[50px] text-xs z-50 w-[200px] p-2 flex flex-col items-center justify-center h-fit bg-gray-100 rounded-md absolute left-[50%] translate-x-[-50%]">
            {menuInfo.Link.map((module, i) => {
              return (
                <div
                  key={i}
                  className="  flex items-center justify-center  w-full py-2 mx-auto hover:bg-[#0552B1] hover:text-white transition-all duration-200 text-black"
                >
                  <Link
                    // className=" invisible group-hover:visible transition-all duration-200 ease-in delay-100 relative font-bold flex items-center justify-center w-full text-xs"
                    href={module.link}
                  >
                    {module.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
