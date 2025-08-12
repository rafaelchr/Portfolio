"use client";

import Image from "next/image";

interface ModalContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContact: React.FC<ModalContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="outfit fixed bottom-3 right-3 bg-slate-600/60 backdrop-blur-sm max-w-md w-full z-50 text-white p-3">
      <div className="flex justify-between">
        <div className="font-bold grotesk text-2xl">Find Me On</div>
        <div onClick={onClose} className="cursor-pointer grotesk text-xl">
          Close
        </div>
      </div>
      <ul className="border-l-5 border-blue-400 pl-5 mt-7 flex flex-col gap-5 text-base mb-5">
        <li className="bg-blue-400 p-4 text-black">
          Email:{" "}
          <span className="inline-flex items-center gap-1 hover:border-b font-medium">
            rafaelmanurung80@gmail.com
            <Image
              src="/logo/open-link.svg"
              width={16}
              height={16}
              alt="open-link"
            ></Image>
          </span>
        </li>
        <li className="bg-blue-400 p-4 text-black">
          Linkedin:{" "}
          <span className="inline-flex items-center gap-1 hover:border-b font-medium">
            www.linkedin.com/in/rafael-manurung{" "}
            <Image
              src="/logo/open-link.svg"
              width={16}
              height={16}
              alt="open-link"
            ></Image>
          </span>
        </li>
        <li className="bg-blue-400 p-4 text-black">
          Github:{" "}
          <span className="inline-flex items-center gap-1 hover:border-b font-medium">
            rafaelchr{" "}
            <Image
              src="/logo/open-link.svg"
              width={16}
              height={16}
              alt="open-link"
            ></Image>
          </span>
        </li>
        <li className="bg-blue-400 p-4 text-black">
          Instagram:{" "}
          <span className="inline-flex items-center gap-1 hover:border-b font-medium">
            @rafaelchr_{" "}
            <Image
              src="/logo/open-link.svg"
              width={16}
              height={16}
              alt="open-link"
            ></Image>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ModalContact;
