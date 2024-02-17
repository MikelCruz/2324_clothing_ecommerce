"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Carousel = ({ slides }) => {
  const [curr, setCurr] = useState(0);

  console.log("Initial curr:", curr);

  console.log(`translateX: -${curr * 100}vw`);

  console.log(`Current index (curr): ${curr}`);

  console.log(slides.length)

  const prev = () => {
    console.log("El botón anterior ha sido pulsado");
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    console.log("El botón siguiente ha sido pulsado");
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;


