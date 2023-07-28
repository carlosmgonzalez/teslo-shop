import { ShopLayout } from "@/components/layouts/ShopLayout";
import { SizeSelected } from "@/components/products/SizeSelected";
import { CarruselImages } from "@/components/ui/CarruselImages";
import { ItemCounter } from "@/components/ui/ItemCounter";
import { CartContext } from "@/context/cart/CartContext";
import { dbProduct } from "@/database";
import { ICartProduct } from "@/interfaces/cart";
import { IProduct, ISize } from "@/interfaces/products";

interface Props {
  product: IProduct;
};

export default function ProductPage({product}: Props) {

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>(
    {
      _id: product._id,
      images: product.images[0],
      price: product.price,
      size: undefined,
      slug: product.slug,
      title: product.title,
      gender: product.gender,
      quantity: 1
    }
  )

  const setSelectedSize = (size: ISize) => {
    setTempCartProduct({...tempCartProduct, size});
  };

  const onQuantity = (quantity: number) => {
    setTempCartProduct({...tempCartProduct, quantity})
  };

  const router = useRouter();
  const {addProductToCart, cart} = useContext(CartContext);

  const onAddProduct = () => {
    console.log(tempCartProduct);
    addProductToCart(tempCartProduct);
    router.push("/cart");
  };

  return (
    <ShopLayout title={`Teslo | ${product.title}`} pageDescription={product.description}>
      <div
        className={
          `pt-10
          flex flex-col justify-center items-center gap-10
          sm:grid sm:grid-cols-2 justify-items-center`
        }
      >
        <CarruselImages ArrayImages={product.images} />

        <div
          className={
            `sm:self-start
            flex flex-col gap-3
            w-full max-w-[400px]
            sm:max-w-[500px]`
          }
        >
          <div>
            <h1 className={`text-4xl font-bold`}>{product.title}</h1>
            <h2 className={`text-xl font-medium mt-2`}>${product.price}</h2>
          </div>
          <div className={`flex gap-2`}>
            <p className={`font-semibold text-lg`}>Cantidad:</p>
            <ItemCounter onQuantity={onQuantity} quantity={tempCartProduct.quantity} maxValue={product.inStock}/>
          </div>
          <SizeSelected setSelectedSize={setSelectedSize} selectedSize={tempCartProduct.size} sizes={product.sizes}/>
          {
            product.inStock == 0
            ? <div className={`py-1.5 px-2 border border-red-700 text-red-700 text-center  rounded-full font-semibold`}>Not available</div> 
            : <button disabled={tempCartProduct.size ? false : true} className={`py-1.5 px-2 bg-blue-700 rounded-full hover:bg-blue-800 font-semibold`} onClick={onAddProduct}>
                {
                  tempCartProduct.size
                    ? "Add to cart"
                    : "Select a size"
                }
              </button>
          }
          <div>
            <h4 className={`font-semibold text-lg`}>Description:</h4>
            <h3 className={`font-light`}>{product.description}</h3>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, GetStaticPathsContext } from 'next'

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const slugs = await dbProduct.getAllProductSlugs(); // your fetch function here 
  
  return {
    paths: slugs.map(({slug}) => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: "blocking"
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const getStaticProps: GetStaticProps = async ({params}) => {

  const {slug} = params as {slug: string};

  const product = await dbProduct.getProductBySlug(slug); // your fetch function here 

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  };
};  






















// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// import { GetServerSideProps } from 'next'
// import { dbProduct } from "@/database";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const {slug} = context.params as {slug: string};

//   const product = await dbProduct.getProductBySlug(slug);
//   const slugs = await dbProduct.getAllProductSlugs();
//   console.log(slugs);

//   if (!product) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false
//       }
//     };
//   };

//   return {
//     props: {
//       product
//     }
//   };
// };

