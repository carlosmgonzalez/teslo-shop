import { IProduct } from "@/interfaces/products";
import {FC} from "react"
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[]
};

export const ProductList:FC<Props> = ({products = []}) => {
  return (
    <div
    className={
      `flex flex-col items-center justify-center
      gap-4
      sm:grid sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5`
    }
  >
    {
      products.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))
    }
  </div>
    
  );
};
