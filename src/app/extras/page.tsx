import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import Image from "next/image";
import { extrasImages } from "@/data/ExtrasImages";

function shuffleArray<T>(array: T[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const Page = () => {
  const shuffledImages = shuffleArray(extrasImages);

  return (
    <div className="m-10">
      <AppNavbar />
      <div className="flex justify-center">
        <div className="outfit tracking-tight text-white w-full max-w-[1600px]">
          <div className="mt-20">
            <div className="text-blue-400 tracking-tight">
              This is a collection of digital works (gallery) I’ve created
              during my free time. Enjoy!
            </div>
            <h1 className="text-7xl w-3/4 mt-4 tracking-tighter text-white capitalize">
              an art gallery could never be as unique as you
            </h1>
            {/* <hr className="mt-20" /> */}
            <div className="mt-20 w-full grid grid-cols-5 gap-2 bg-slate-600/30 backdrop-blur-sm py-20 px-2">
              {shuffledImages.map((img, i) => (
                <div key={i} className="relative bg-amber-300 h-85">
                  <Image
                    src={img}
                    fill
                    alt={`photo-${i}`}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Page;
