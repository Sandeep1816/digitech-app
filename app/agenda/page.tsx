"use client";
import Image from "next/image";

const agendaImages = [
  "/images/agenda/11.jpg",

   "/images/agenda/digitechspeaker11.jpg",
   "/images/agenda/digitechspeaker12.jpg",
     "/images/agenda/digitechlogo11.jpg",
  "/images/agenda/12.jpg",
  "/images/agenda/13.jpg",
  "/images/agenda/14.jpg",

  "/images/agenda/fintech2.jpg",
];

const AgendaPage = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Agenda</h1>
      <div className="flex flex-col gap-8">
        {agendaImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3508/4955] rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`Agenda Poster ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaPage;
