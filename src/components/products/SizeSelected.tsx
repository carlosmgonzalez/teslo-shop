import { IProduct, ISize } from '@/interfaces/products';
import {FC, useState, MouseEvent } from 'react'

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
  setSelectedSize: (size: ISize) => void;
};

export const SizeSelected:FC<Props> = ({selectedSize, sizes, setSelectedSize}) => {

  return (
    <div className='flex items-center justify-around'>
      {
        sizes.map(size => {
          return (
            <button
              onClick={() => setSelectedSize(size)}
              key={size}
              className={
                `hover:bg-neutral-800 py-1.5 px-4 rounded-md
                ${selectedSize === size && "bg-neutral-800"}`
              }
            >{size}</button>
          )
        })
      }
    </div>
  );
};

// Esto fue mi solucion, tomando el valor del sizes desde el target.name y la mejor forma era tan tolo enviarle el sizes directamente
// const onSelectedSize = (e: MouseEvent<HTMLButtonElement>) => {
//   const target = e.target as HTMLButtonElement;
//   const selectedName = target.name;

//   // Buscar el objeto ISize correspondiente al nombre seleccionado
//   const selectedSizeObject = sizes.find(size => size === selectedName);

//   if (selectedSizeObject) {
//     // Pasar el objeto ISize a setSelectedSize
//     setSelectedSize(selectedSizeObject);
//   };
// };