import {FC, useState} from 'react';
import { BiPlusCircle, BiMinusCircle  } from "react-icons/bi";


interface Props {
  onQuantity: (quantity: number) => void;
  quantity: number;
  maxValue: number
};

export const ItemCounter:FC<Props> = ({onQuantity, quantity, maxValue}) => {

  const increaseQuantity = () => {
    if (quantity < maxValue) {
      onQuantity(quantity + 1);
    };
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantity(quantity - 1);
    };
  };

  return (
    <div className={`flex items-center justify-start gap-2`}>
      <BiMinusCircle className={`w-[25px] h-[25px] cursor-pointer`} onClick={() => decreaseQuantity()} />
      {
        quantity
      }
      <BiPlusCircle className={`w-[25px] h-[25px] cursor-pointer`} onClick={() => increaseQuantity()} />
    </div>
  );
};
