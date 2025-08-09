import Image from "next/image";
import Link from "next/link";

const CareerJourney = () => {
  const cards = Array(6).fill({
    category: "Web Design",
    title: "Lumio Homepage",
    image: "/twirl.png",
  });

  return (
    <div className={`outfit text-white mt-15 tracking-tight`}>
      <div>Career Journey</div>
      <div className="grid grid-cols-4 gap-8 mt-5">
        {cards.map((card, index) => (
          <Link key={index} href={`/detail/${index}`}>
          <div className="max-w-sm overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src={card.image}
                fill
                alt="Gradient background"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="bg-[#161616] p-3">
              <p className="text-gray-500 font-semibold text-sm">{card.category}</p>
              <h3 className="">{card.title}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerJourney;
