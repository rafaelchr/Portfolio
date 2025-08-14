import Image from "next/image";
import Link from "next/link";
import { careerJourneyData } from "@/data/CareerJourney";

const CareerJourney = () => {
  return (
    <div id="career-journey" className="flex justify-center">
      <div className="outfit text-white mt-15 tracking-tight max-w-[1600px] w-full">
        <div>Career Journey</div>
        <div className="grid grid-cols-4 gap-8 mt-5">
          {careerJourneyData.map((card, index) => (
            <Link key={index} href={`/detail/${index}`}>
              <div className="max-w-sm overflow-hidden shadow-lg bg-slate-600/30 backdrop-blur-sm">
                <div className="relative h-60">
                  <Image
                    src={card.image}
                    fill
                    alt="Gradient background"
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-gray-500 font-semibold text-sm">
                    {card.category}
                  </p>
                  <h3 className="font-light tracking-wide">{card.title}</h3>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerJourney;
