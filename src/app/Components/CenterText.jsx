import Image from "next/image";
import React from "react";
import img1 from "../../../public/Images/g-20-logo.jpg"
import img2 from "../../../public/Images/health_id.jpg"

const CenterText = () => {
  return (
    <div className="px-5">
      <div className=" flex flex-col items-center justify-around py-3">
        <h1 className=" text-2xl font-bold text-black py-3">
          Welcome to Department of Prosecution
        </h1>
        <p className=" text-lg font-semibold text-gray-600 py-3">
          With ’law and justice’ being a State subject, there is no uniformity
          in the structure of public prosecution in India. In a large number of
          States the boundary between the investigation agency and the
          prosecution is blurred. This adversely affects the impartiality of the
          PP since the police could control the prosecution. In a few States
          where the prosecution is headed by a senior police officer, the
          boundary completely collapses
        </p>
      </div>
      <div className=" flex flex-row items-center justify-around gap-5">
        <div className="flex flex-row gap-3">
          <div className=" bg-white text-black w-fit p-3 ">
            <div className="bg-gray-300 p-2">
              <h1>NEWS & Press Release</h1>
            </div>
            <div className="flex flex-col gap-5 bg- px-3 py-4 w-full">
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>A high-level delegation led by the Union Minister of Fisheries...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Dr Jitendra Singh met UP CM Yogi Adityanath in Lucknow,...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Three-day National Thematic Workshop on Localization of LSDGs...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Onion buffer enhanced from 3 lakh MT to 5 lakh MT</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Shri Nitin Gadkari to launch the Bharat New Car Assessment...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>G20 India Presidency</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[280px] flex flex-col gap-5">
            <div className="flex flex-col w-full border-black border-[1px]">
                <Image src={img2} width={280} height={100} />
                <div className="w-full bg-white p-2">
                    <span className=" text-black text-xs">Health ID - Key to your Digital Healthcare Journey</span>
                </div>
            </div>
            <div className="flex flex-col w-full border-black border-[1px]">
                <Image src={img1} width={280} height={100} />
                <div className="w-full bg-white p-2">
                    <span className=" text-black text-xs">One Earth One Family One Future</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className=" bg-white text-black w-fit p-3 ">
            <div className="bg-gray-300 p-2">
              <h1>Information</h1>
            </div>
            <div className="flex flex-col gap-5 bg- px-3 py-4 w-full">
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Website of Oriental Insurance Company Limited</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Website of Board of Apprenticeship Training (Southern...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Micro Small and Medium Enterprises Development Institute of...</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>ENVIS Centre of Chhattisgarh Environment Conservation Board</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Website of Committee of Parliament on Official Language</span>
              </div>
              <div className="flex flex-row items-center hover:bg-blue-500 hover:text-white px-1 py-2 transition-all duration-300 ease-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span>Advanced Training Institute for Electronics and Process...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-around py-3">
        <h1 className=" text-2xl font-bold text-black py-3">
          RULE OF LAW PURSUIT OF TRUTH
        </h1>
        <p className=" text-lg font-semibold text-gray-600 py-3">
          “The independence of the Public Prosecutor from any governmental
          control is the hallmark of this high office. A Public Prosecutor is
          really a minister of justice and his job is none other assisting the
          state in the administration of justice and in fact he is not a
          representative of any party.”
        </p>
      </div>
    </div>
  );
};

export default CenterText;
