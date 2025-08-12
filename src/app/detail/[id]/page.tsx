"use client";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import { useParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const { id } = useParams();

  return (
    <div className="m-10">
      <AppNavbar />
      <div className="text-white">
        <div className="flex justify-center">
          <div className="outfit tracking-tight text-white w-full max-w-[1600px]">
            <div className="mt-20">
              <div className="text-blue-400 tracking-tight">Career Journey</div>
              <h1 className="text-7xl w-3/4 mt-4 tracking-tighter text-white capitalize">
                Ini adalah Judul Proyek {Number(id) + 1}
              </h1>
              <p className="w-1/2 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis alias architecto at vero. Tempore necessitatibus
                obcaecati, itaque ipsa deleniti nam, iste distinctio consectetur
                quas laboriosam reiciendis facere fuga ducimus molestiae ut
                aliquid ab hic magni?
              </p>
              <div className="w-1/2 mt-4 flex gap-10 font-light text-sm">
                <div>
                  <p className="text-gray-400 font-medium">Type</p>
                  <p className="font-medium">Personal Project</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium">Timeline</p>
                  <p className="font-medium">DD-MM-YY - DD-MM-YY</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium">
                    Tech Stack/Tools
                  </p>
                  <p className="font-medium">sql</p>
                  <p className="font-medium">java</p>
                  <p className="font-medium">spring boot</p>
                  <p className="font-medium">next</p>
                </div>
                <div>
                  <p className="text-gray-400 font-medium">Team</p>
                  <p className="font-medium">Me</p>
                </div>
              </div>
              <div className="w-full mt-10 flex flex-col gap-10">
                <div className="relative">
                  <Image
                    src="/gambar.jpg"
                    width={1600}
                    height={900}
                    alt="project-photo"
                    className="object-cover"
                  ></Image>
                </div>
                <div className="relative">
                  <Image
                    src="/twirl.png"
                    width={1600}
                    height={900}
                    alt="project-photo"
                    className="object-cover"
                  ></Image>
                </div>
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
