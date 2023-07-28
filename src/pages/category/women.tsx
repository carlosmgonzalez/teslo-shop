import { ShopLayout } from "@/components/layouts/ShopLayout";
import { ProductList } from "@/components/products/ProductList";
import { FullScreenLoading } from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks/useProducts";

export default function Women() {

  const {products = [], isLoading} = useProducts("/products?gender=women");

  return (
    <ShopLayout title="Teslo | Kids" pageDescription="Women categories">
      <h1 className="text-2xl font-bold"> Shop </h1>
      <h2 className="mb-1">Women Category</h2>
      {
        isLoading 
          ? <FullScreenLoading/>
          : <ProductList products={products} />
      }
    </ShopLayout>
  );
};