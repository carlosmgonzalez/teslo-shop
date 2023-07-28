import { ShopLayout } from "@/components/layouts/ShopLayout";
import { ProductList } from "@/components/products/ProductList";
import { FullScreenLoading } from "@/components/ui/FullScreenLoading";
import { useProducts } from "@/hooks/useProducts";
import { useRouter } from "next/router";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
};

export default function SearchPage({products, foundProducts, query}: Props) {

  // const {query} = useRouter();
  // const {products = [], isLoading} = useProducts(`/search/${query.query}`);

  return (
    <ShopLayout title="Teslo | Search" pageDescription="Serach page products">
      <h1 className="text-2xl font-bold"> Search </h1>
      {
        foundProducts
          ? <h2 className="mb-1">Term: {query}</h2>
          : <>
              <h2 className="mb-1 font-light text-red-400">There is no product with this term: {query}</h2>
              <h2 className="mb-3 text-lg font-semibold">These products may interest you:</h2>
            </>
      }
      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IProduct } from "@/interfaces/products";
import { dbProduct } from "@/database";

export const getServerSideProps: GetServerSideProps = async ({params}) => {

  const {query = ""} = params as {query: string};

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true
      }
    };
  };

  let products = await dbProduct.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProduct.getAllProducts();
    console.log(products);
  };

  return {
    props: {
      products,
      foundProducts,
      query
    }
  };
};