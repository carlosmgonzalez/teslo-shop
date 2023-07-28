import { ShopLayout } from "@/components/layouts/ShopLayout";
import { ProductList } from "@/components/products/ProductList";
import { FullScreenLoading } from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks/useProducts";

export default function Men() {

  const {products = [], isLoading} = useProducts("/products?gender=men");

  return (
    <ShopLayout title="Teslo | Men" pageDescription="Men categories">
      <h1 className="text-2xl font-bold"> Shop </h1>
      <h2 className="mb-1">Kids Category</h2>
      {
        isLoading 
          ? <FullScreenLoading/>
          : <ProductList products={products} />
      }
    </ShopLayout>
  );
};