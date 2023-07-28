import { IProduct } from "@/interfaces/products";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface Props {
  product: IProduct;
};


export const ProductCard:FC<Props> = ({product}) => {

  const [changeImageHover, setChangeImageHover] = useState(`/products/${product.images[0]}`);


  return (
    <div className="flex flex-col" 
      
    >
      <Link href={`/product/${product.slug}`} prefetch={false}>
        <div
          className={`relative flex justify-center sm:flex-none sm:justify-normal rounded-md h-full w-full fadeIn`}
        >
          <div 
            className="absolute rounded-md w-full max-w-[300px] max-h-[300px] h-full hover:bg-[#00000044] transition ease-in-out duration-500 "
            onMouseEnter={() => setChangeImageHover(`/products/${product.images[1]}`)}
            onMouseOut={() => setChangeImageHover(`/products/${product.images[0]}`)}
          ></div>
          {
            product.inStock == 0 && (
              <div className="w-full flex justify-start">
                <p className="absolute text-red-300 px-2 py-1 rounded-md bg-black text-xs m-1">Without Stock</p>
              </div>
            )
          }
          <Image
            src={changeImageHover}
            width={300}
            height={300}
            alt={product.title}
            className={`rounded-md block hover:hidden `}
          />
        </div>
        <div className="fadeIn mt-1 h-[65px] max-w-[300px]">
          <h3 className="font-semibold">{product.title}</h3>
          <h4>${product.price}</h4>
        </div>
      </Link>
    </div>
  );
};
