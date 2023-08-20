import React from "react";
import DropDown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#296DC1] py-1 px-3 flex flex-row items-center justify-around">
      <div>
        <h1 className=" text-3xl font-bold text-white">UP Prosecution</h1>
      </div>
      <DropDown />
    </div>
  );
};

export default Navbar;
