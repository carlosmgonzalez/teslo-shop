import { PropsWithChildren, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { ICartProduct } from "@/interfaces/cart";

export interface CartState {
  cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
  cart: []
};

export const CartProvider = ({children}: PropsWithChildren) => {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (newProduct: ICartProduct) => {

    let cartWithNewProduct: ICartProduct[] = [];
    const productExists = state.cart.some(product => product._id === newProduct._id && product.size === newProduct.size);

    if (productExists) {
      cartWithNewProduct = state.cart.map(product => {
        if (product._id == newProduct._id && product.size == newProduct.size) {
          return {
            ...product,
            quantity: product.quantity + newProduct.quantity
          }
        };
  
        return product;
      })
    } else {
      cartWithNewProduct = [...state.cart, newProduct];
    };

    dispatch({
      type: "[cart] - add product",
      payload: cartWithNewProduct
    });
  };

  const removeProductToCart = (newProduct: ICartProduct) => {
    dispatch({
      type: "[cart] - remove product",
      payload: newProduct
    });
  };

  return (
    <CartContext.Provider value={{...state, addProductToCart, removeProductToCart}}>
      {children}
    </CartContext.Provider>
  );
};