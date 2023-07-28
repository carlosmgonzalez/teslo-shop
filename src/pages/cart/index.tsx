import { CartList } from "@/components/cart/CartList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts/ShopLayout";

export default function CartPage () {
  return (
    <ShopLayout title="Teslo | Shop" pageDescription="">
      <div className={`flex flex-col gap-y-5  |  sm:grid sm:grid-cols-7 sm:gap-x-5`}>

        <div className={`sm:col-start-1 sm:col-end-5`} >
          <h2 className={`text-3xl font-bold mb-2`}>Cart</h2>
          <CartList editable/>
        </div>

        <div className={ `sm:col-start-5 sm:col-end-8`}>
          <div className={ `flex flex-col gap-3 p-4  |  shadow-sm shadow-neutral-800 border border-neutral-700 rounded-md`}>
            <h2 className={`text-xl`}> Purchase Order </h2>
            <hr className={`w-full self-center border-neutral-700 my-1`} />
            <OrderSummary/>
            <button className={`py-1.5 px-2 rounded-full w-full font-semibold bg-blue-800 hover:bg-blue-700`}>Checkout</button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};