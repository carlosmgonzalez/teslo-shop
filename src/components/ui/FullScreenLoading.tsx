import { ShopLayout } from '../layouts/ShopLayout';

export const FullScreenLoading = () => {
  return (
    <ShopLayout title="Teslo | Loading" pageDescription="The shop is loagind">
      <div className="h-[calc(100vh-350px)] flex flex-col justify-center items-center sm:flex-row">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-200"></div>
      </div>
    </ShopLayout>
  );
};
