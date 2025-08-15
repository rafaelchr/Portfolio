"use client";

import { useState } from "react";
import Link from "next/link";
import ModalContact from "./modal-contact";
import ModalNavbar from "./modal-navbar";
import { RxHamburgerMenu } from "react-icons/rx";

const AppNavbar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isNavbarModalOpen, setIsNavbarModalOpen] = useState<boolean>(false);

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

          <div className="md:hidden cursor-pointer">
            <RxHamburgerMenu className="text-3xl" onClick={() => setIsNavbarModalOpen(true)}/>
          </div>

          <ul className="hidden md:flex items-end gap-20 rounded-sm tracking-tight">
            <li>
              <Link href={"/#career-journey"} scroll={true}>
                Career Journey
              </Link>
            </li>
            <li>
              <Link href={"/about"}>About Me</Link>
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

          <ModalNavbar
            isOpen={isNavbarModalOpen}
            onClose={() => setIsNavbarModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
