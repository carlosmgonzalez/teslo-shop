import Image from "next/image";
import { FC, useState } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";


interface Props {
  ArrayImages: string[];
};

export const CarruselImages:FC<Props> = ({ArrayImages}) => {

  const carruselImages = ArrayImages;

  const [index, setIndex] = useState(0);
  const [images , setImages] = useState(carruselImages[0]);

  const next = () => {
    const condition = index < carruselImages.length - 1;
    const nextIndex = condition ? index + 1 : 0;

    setImages(carruselImages[nextIndex]);
    setIndex(nextIndex);
  };

  const previous = () => {
    const condition = index > 0;
    const nextIndex = condition ? index - 1 : carruselImages.length - 1;

    setImages(carruselImages[nextIndex]);
    setIndex(nextIndex);
  };

  return (
    <div
          className={`relative`}
        >
          <Image
            src={`/products/${images}`}
            width={400}
            height={400}
            alt={""}
            className={`rounded-md`}
          />
          <BiSolidChevronLeft onClick={() => previous()} className={`absolute top-1/2 left-2 w-[30px] h-[30px] bg-zinc-500 rounded-full cursor-pointer`}/>
          <BiSolidChevronLeft onClick={() => next()} className={`absolute top-1/2 right-2 w-[30px] h-[30px] bg-zinc-500 rounded-full rotate-180 cursor-pointer`}/>
          <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 flex justify-center items-center text-6xl">
            {ArrayImages.map((img, i) => (<p key={i} className={`${i==index ? "text-black" : "text-zinc-400"}`}>.</p>))}
          </div>
        </div>
  );
};
