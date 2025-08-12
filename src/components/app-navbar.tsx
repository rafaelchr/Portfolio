"use client";

import { useState } from "react";
import Link from "next/link";
import ModalContact from "./modal-contact";

const AppNavbar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="outfit w-full max-w-[1600px]">
        <div className="text-white flex justify-between items-end">
          <Link href={"/"}>
            <div className={`grotesk flex items-end`}>
              <div className="font-semibold text-3xl px-2 bg-blue-400 text-black grid justify-center items-center m-1">
                T
              </div>
              <div className="grotesk font-medium text-3xl">Rafael Chr.</div>
            </div>
          </Link>

          <ul className="flex gap-20 py-4 rounded-sm tracking-tight">
            <li>
              <Link href={"/about"}>About Me</Link>
            </li>
            <li>
              <Link href={"/#career-journey"} scroll>Career Journey</Link>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setIsContactModalOpen((prev) => !prev)}
            >
              Contact
            </li>
            <li>
              <Link href={"/extras"}>Extras</Link>
            </li>
          </ul>

          <ModalContact
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
