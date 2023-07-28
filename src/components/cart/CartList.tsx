import { initialData } from "@/database/products";
import Image from "next/image";
import { ItemCounter } from "../ui/ItemCounter";
import { FC, useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";

interface Props {
  editable: boolean;
};

export const CartList:FC<Props> = ({editable}) => {

  // const product = initialData.products;

  // const productsInCart = [ product[0], product[1], product[2]];

  const {cart: productsInCart, removeProductToCart} = useContext(CartContext);

  return (
    <div
      className={`flex flex-col justify-center w-full gap-3`}
    >
      {
        productsInCart.map(product => {
          return (
            <div key={product.slug} className={`flex justify-between gap-2`}>
              <div className={`flex gap-3`}>
                <div>
                  <Image
                    src={`/products/${product.images}`}
                    width={100}
                    height={100}
                    alt={product.slug}
                    className={`rounded-md min-w-[100px]`}
                  />
                </div>
                <div>
                  <h3>{product.title}</h3>
                  <p>Size: <span className={`font-bold`}>{product.size}</span></p>
                  {
                    // editable &&  <ItemCounter quantity={product.quantity} maxValue={10} onQuantity={}/>
                  }
                  <h3>Quantity: {product.quantity}</h3>
                </div>
              </div>
              <div
                className={`flex flex-col items-center`}
              >
                <p className={`text-xl`}>${product.price}</p>
                {
                  editable && <button className={`text-red-800 hover:border hover:border-red-800 py-0.5 px-1 rounded-md`} onClick={() => removeProductToCart(product)}>Remove</button>
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};
