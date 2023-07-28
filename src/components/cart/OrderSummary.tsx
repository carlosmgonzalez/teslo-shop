export const OrderSummary = () => {
  return (
    <div
      className={`flex flex-col gap-2`}
    >
      <div className={`flex justify-between items-center`}>
        <p>No. Products</p>
        <p>3 items</p>
      </div>

      <div className={`flex justify-between items-center`}>
        <p>SubTotal</p>
        <p>$405</p>
      </div>

      <div className={`flex justify-between items-center`}>
        <p>Taxes(16%)</p>
        <p>$64.8</p>
      </div>

      <div className={`flex justify-between items-center mt-2`}>
        <p className={`font-semibold text-xl`}>Total:</p>
        <p className={`font-semibold text-xl`}>$469.8</p>
      </div>
      
    </div>
  );
};
