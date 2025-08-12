import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import Image from "next/image";

const page = () => {
  return (
    <div className="m-10">
      <AppNavbar />
      <div className="flex justify-center">
        <div className="outfit tracking-tight text-white w-full max-w-[1600px]">
          <div className="flex gap-10 mt-20">
            <div className="w-full">
              <Image
                src="/twirl.png"
                width={1600}
                height={900}
                alt="profile-picture"
                className=""
              ></Image>
            </div>
            <div className="w-full bg-slate-600/30 backdrop-blur-sm p-10">
              <div>
                <h1 className="text-4xl grotesk font-bold tracking-wide text-blue-400">
                  I&apos;m Rafael Manurung
                </h1>
                <p className="text-slate-400 text-sm font-light">Fresh graduate in Informatics</p>
                <p className="text-slate-400 text-sm font-light">Full-stack developer and graphic design enthusiast</p>
              </div>
              <div className="mt-10">
                <h1 className="grotesk font-bold tracking-wide text-xl">
                  WHAT I DO
                </h1>
                <p className="mt-2">
                  Hi! I&apos;m Rafael. I am a passionate full-stack developer
                  with a keen interest in graphic design.
                </p>
                <ul className="border-l-5 border-blue-400 flex flex-col gap-3 mt-5 pl-5">
                  <li>Build and maintain responsive, dynamic websites</li>
                  <li>Develop both front-end and back-end applications</li>
                  <li>
                    Incorporate creative design elements into functional web
                    solutions
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h1 className="grotesk font-bold tracking-wide text-xl">
                  EDUCATION
                </h1>
                <ul className="border-l-5 border-blue-400 flex flex-col gap-3 mt-5 pl-5">
                  <li>
                    <p>Bachelor of Computer Science in Informatics</p>
                    <p className="text-slate-400 text-sm font-light">(GRADUATED CUM LAUDE 2025)</p>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h1 className="grotesk font-bold tracking-wide text-xl">
                  OTHER INTERESTS
                </h1>
                <ul className="border-l-5 border-blue-400 flex flex-col gap-3 mt-5 pl-5">
                  <li>I enjoy watching movies and series</li>
                  <li>Love playing games</li>
                  <li>Runner (my longest distance so far is 12K hehe...)</li>
                  <li>Enjoy designing posters</li>
                  <li>Prefer nature over the city life</li>
                  <li>Passionate about photography</li>
                </ul>
              </div>
              <div className="mt-10">
                <h1 className="grotesk font-bold tracking-wide text-xl">
                  LANGUAGE PROFICIENCY
                </h1>
                <p className="mt-5">
                  Native fluency in <span className="font-bold tracking-wide mx-1">BAHASA INDONESIA</span>. Limited working proficiency in <span className="font-bold tracking-wide mx-1">ENGLISH</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default page;
