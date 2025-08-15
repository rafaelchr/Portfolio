import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";

interface ModalContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalNavbar: React.FC<ModalContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="outfit fixed top-0 left-0 w-full h-dvh bg-slate-600/60 backdrop-blur-sm z-50 text-white p-10">
      <div className="flex justify-between">
        <div className="font-bold grotesk text-2xl">Navigation</div>
        <div onClick={onClose} className="cursor-pointer grotesk text-xl">
          <LiaTimesSolid className="text-3xl" />
        </div>
      </div>
      <ul className="flex flex-col gap-6 rounded-sm tracking-tight mt-10">
        <li>
          <Link onClick={onClose} href={"/#career-journey"} scroll={true}>
            Career Journey
          </Link>
        </li>
        <li>
          <Link onClick={onClose} href={"/about"}>
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={onClose} href={"/extras"}>
            Extras
          </Link>
        </li>
      </ul>
      <div className="bg-white p-5 mt-20">
        <h1 className="grotesk font-bold text-xl text-black">Find Me On</h1>
        <ul className="flex flex-col gap-4 text-base mt-5">
          <li className="text-black">
            Email:<br />
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
          <li className="text-black">
            Linkedin:<br />
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
          <li className="text-black">
            Github:<br />
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
          <li className="text-black">
            Instagram:<br />
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
    </div>
  );
};

export default ModalNavbar;
