"use client";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import { useParams } from "next/navigation";
import Image from "next/image";
import { careerJourneyData } from "@/data/CareerJourney";
import { CareerJourneyItem } from "@/data/CareerJourney";

const Page = () => {
  const { id } = useParams() || -1;
  const Item: CareerJourneyItem = careerJourneyData[Number(id)];

  if(Item == null || Item == undefined) return null;

  return (
    <div className="m-6 xl:m-10">
      <AppNavbar />
      <div className="text-white">
        <div className="flex justify-center">
          <div className="outfit tracking-tight text-white w-full max-w-[1600px]">
            <div className="mt-20">
              <div className="text-blue-400 tracking-tight">Career Journey</div>
              <h1 className="text-5xl md:text-7xl w-3/4 mt-4 tracking-tighter text-white capitalize">
                {Item.title}
              </h1>
              <p className="w-full md:w-3/4 mt-4">
                {Item.desc}
              </p>
              <div className="w-full mt-4 flex gap-2 sm:gap-10 font-light text-sm">
                <div>
                  <p className="text-gray-400 font-medium">Type</p>
                  <p className="font-medium">{Item.category}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium">Timeline</p>
                  <p className="font-medium">DD-MM-YY - DD-MM-YY</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium">Tech Stack/Tools</p>
                  {Item.tech.map((name, index) => (
                    <p key={index} className="font-medium">
                      {name}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-gray-400 font-medium">Team</p>
                  <p className="font-medium">Me (Rafael)</p>
                  {Item.team?.map((name, index) => (
                    <p key={index} className="font-medium">
                      {name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full mt-10 flex flex-col gap-10">
                {Item.comp != null || Item.comp != undefined ? (
                  Item.comp.map((img, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={img}
                        width={1600}
                        height={900}
                        alt="project-photo"
                        className="object-cover"
                      ></Image>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Page;
