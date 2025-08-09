import Link from "next/link";

const AppHero = () => {
  return (
    <div className="outfit mt-60 tracking-tight">
      <div className="grid gap-5 text-white">
        <div className="text-blue-400 capitalize">
          A fresh graduate in computer science
        </div>
        <div className="text-7xl tracking-tight">
          From Concept to Code<br />as a Full Stack Developer
        </div>
        <div className="w-1/2">
          Great developers aren’t just problem-solvers, they’re visionaries who
          turn ideas into impactful solutions. Start building today, because
          every line of code brings you closer to mastery.
        </div>
        <div className="grid grid-cols-4">
          <Link
            href={""}
            className="text-slate-900 capitalize bg-blue-400 p-4 text-center font-medium"
          >
            View CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
