import { ShopLayout } from "@/components/layouts/ShopLayout";
import Link from "next/link";
import {MdOutlineRemoveShoppingCart} from "react-icons/md"

export default function EmptyCart () {
  return (
    <ShopLayout title="Teslo | Cart" pageDescription="No items in the cart" >
      <div
        className={
          `h-[calc(100vh-150px)]
          flex justify-center items-center`
        }
      >
        <MdOutlineRemoveShoppingCart className="w-[100px] h-[100px]"/>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1
            className={`text-2xl font-semibold`}
          >No items in the cart</h1>
          <Link
            href={"/"}
            className="text-blue-800 text-3xl font-bold"
          >Go Back</Link>
        </div>

      </div>
    </ShopLayout>
  );
};