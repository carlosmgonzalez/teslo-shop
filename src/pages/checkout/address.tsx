import { ShopLayout } from "@/components/layouts/ShopLayout";

export default function AddressPage () {
  return (
    <ShopLayout title="Teslo | Checkout" pageDescription="Checkout">
      <h1 className={`text-3xl font-bold mb-3`}>Address</h1>
      <div
        className={
          `flex flex-col w-full
          sm:grid sm:grid-cols-2 sm:gap-3`
        }
      > 
        <input type="text" placeholder="Name"
        className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <input type="text" placeholder="Last name"
          className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <input type="text" placeholder="Address"
        className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <input type="text" placeholder="Adress 2"
          className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <input type="text" placeholder="Postal code"
        className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <input type="text" placeholder="City"
          className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
        
        <select name="Location"
        className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300">
          <option value="1">Ciudad de Buenos Aires</option>
          <option value="2">Belen de Escobar</option>
          <option value="3">Pilar</option>
          <option value="4">Tigre</option>
          <option value="5">Lomas de Zamora</option>
        </select>
        
        <input type="text" placeholder="Phone number"
          className="sm:w-full rounded-md bg-neutral-700 py-1.5 px-2 focus:outline-none focus:border focus:border-neutral-300"/>
      
        <div className="sm:col-start-2 sm:col-end-3 sm:justify-self-end">
          <button
            className="py-1.5 px-2 bg-blue-800 hover:bg-blue-700 rounded-md"
          >Check order</button>
        </div>
      </div>
    </ShopLayout>
  );
};
