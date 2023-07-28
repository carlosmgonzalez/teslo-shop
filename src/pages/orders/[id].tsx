import { CartList } from "@/components/cart/CartList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts/ShopLayout";
import {MdOutlineCreditCardOff, MdCreditScore} from "react-icons/md"
import Link from "next/link";

export default function OrderPage () {
  return (
    <ShopLayout title="Teslo | Order Summary" pageDescription="Order Summary">

      <div className={`flex flex-col gap-y-5  |  sm:grid sm:grid-cols-7 sm:gap-x-5`}>

        <div className={`sm:col-start-1 sm:col-end-5`}>

          <div className={`flex justify-between items-center mb-3`}>
            <h2 className={`text-3xl font-bold`}>Order: ABC123</h2>
            {/* <div className={`flex items-center gap-2 py-1 px-2 border border-red-600 rounded-full`}>
              <MdOutlineCreditCardOff className={`w-[25px] h-[25px] text-red-600`}/>
              <p className={`text-red-600`}>Pending Payment</p>
            </div> */}
            <div className={`flex items-center gap-2 py-1 px-2 border border-green-600 rounded-full`}>
              <MdCreditScore className={`w-[25px] h-[25px] text-green-600`}/>
              <p className={`text-green-600`}>Paid Order</p>
            </div>
          </div>

          <CartList editable={false}/>

        </div>

        <div className={`sm:col-start-5 sm:col-end-8`}>

          <div className={`flex flex-col gap-3 p-4  |  shadow-sm shadow-neutral-800 border border-neutral-700 rounded-md`}>

            <h2 className={`text-xl`}> Order summary (3 products) </h2>

            <hr className={`w-full self-center border-neutral-700 my-1`} />

            <div className={`flex flex-col gap-1`} >

              <div className={`flex justify-between`}>
                <h3 className={`text-lg font-semibold`}>Delivery address</h3>
                <Link href={"/checkout/address"} className={`underline`}>Edit</Link>
              </div>

              <p className="font-light">Carlos Mario Gonzalez</p>
              <p className="font-light">Rodriguez Peña 208</p>
              <p className="font-light">Ciudad de Buenos Aires, 1020</p>
              <p className="font-light">+54 1140634529</p>
            </div>

            <hr className={`w-full self-center border-neutral-700 my-1`} />
            <OrderSummary/>
            <h3 className="text-2xl font-semibold">Pagar</h3>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};