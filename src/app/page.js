import Image from "next/image";
import ImgSlider from "./Components/ImgSlider";

import CenterText from "./Components/CenterText";
import CenterCard from "./Components/CenterCard";
import LastSec from "./Components/LastSec";
export default function Home() {
  return (
    <main className=" bg-gray-100 min-h-screen">
      <div className=" w-[100%] h-full py-5">
        <ImgSlider />
      </div>
      <CenterText />
      <CenterCard />
      <LastSec />
    </main>
  );
}
