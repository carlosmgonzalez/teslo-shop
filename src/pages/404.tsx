import { ShopLayout } from "@/components/layouts/ShopLayout";

export default function Custom404() {
  return (
    <ShopLayout title="404 | Page Not Found" pageDescription="There are not anything to show">
      <div
        className="h-[calc(100vh-150px)] flex flex-col justify-center items-center sm:flex-row"
      >
        <h1 className="text-4xl font-bold">404 | </h1>
        <h2 className="text-2xl font-semibold ml-2">Page Not Found</h2>
      </div>
    </ShopLayout>
  );
};