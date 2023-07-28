import { ShopLayout } from "@/components/layouts/ShopLayout";
import { ProductList } from "@/components/products/ProductList";
import { FullScreenLoading } from "@/components/ui/FullScreenLoading";
import { initialData } from "@/database/products";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";


export default function Home() {

  const {products = [], isLoading} = useProducts("/products");

  return (
    <ShopLayout title="Teslo | Shop" pageDescription="Best shop around the world">
      <h1 className="text-2xl font-bold"> Shop </h1>
      <h2 className="mb-1">All my products</h2>
      {
        isLoading 
          ? <FullScreenLoading/>
          : <ProductList products={products} />
      }
    </ShopLayout>
  );
};

      // <div
      //   className={
      //     `flex flex-col items-center justify-center
      //     gap-4
      //     sm:grid sm:grid-cols-2
      //     md:grid-cols-3
      //     lg:grid-cols-4
      //     xl:grid-cols-5`
      //   }
      // >
      //   {
      //     initialData.products.map(product => {
      //       return (
      //         <div key={product.slug}
      //           className={`relative flex justify-center sm:flex-none sm:justify-normal rounded-md h-full w-full`}
      //         >
      //           <div className="absolute rounded-md w-full max-w-[300px] max-h-[300px] h-full hover:bg-[#00000044] transition ease-in-out duration-500 ">
      //           </div>
      //           <Image
      //             src={`/products/${product.images[0]}`}
      //             width={300}
      //             height={300}
      //             alt={product.title}
      //             className={`rounded-md `}
      //           />
      //         </div>
      //       )
      //     })
      //   }
      // </div>