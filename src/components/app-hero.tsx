import Link from "next/link";

const AppHero = () => {
  return (
    <div className="flex justify-center">
      <div className="outfit mt-60 tracking-tight max-w-[1600px] w-full">
        <div className="grid gap-4 md:gap-5 text-white">
          <div className="text-blue-400 capitalize">
            A fresh graduate in computer science
          </div>
          <div className="text-5xl md:text-7xl tracking-tight">
            From Concept to Code
            <br />
            as a Full Stack Developer
          </div>
          <div className="w-full md:w-1/2">
            Great developers aren’t just problem-solvers, they’re visionaries
            who turn ideas into impactful solutions. Start building today,
            because every line of code brings you closer to mastery.
          </div>
          <div className="grid md:grid-cols-4">
            <Link
              href={""}
              className="text-slate-900 capitalize bg-blue-400 p-4 text-center font-medium md:col-span-2 lg:col-span-1"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
