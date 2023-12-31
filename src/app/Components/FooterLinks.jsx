import React from "react";
import Link from "next/link";


const FooterLinks = ({ title, list1 }) => {
  return (
    <>
      <p className="text-white font-semibold text-lg pb-4">{title}</p>
      {list1.map((module,i) => {
        return (
          <div key={i} className="text-slate-200 text-xs pb-2 hover:text-blue-300 cursor-pointer">
            <Link href={module.link}>{module.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default FooterLinks;
