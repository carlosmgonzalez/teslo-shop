import { ICartProduct } from "@/interfaces/cart";
import { CartState } from "./CartProvider";

type NameActionType = 
  |{ type: '[cart] - loadcart from cookies | storage', payload: ICartProduct[] }
  |{ type: '[cart] - add product', payload: ICartProduct[]}
  |{ type: '[cart] - remove product', payload: ICartProduct}

export const cartReducer = (state: CartState, action: NameActionType):CartState => {
  switch (action.type) {
    case '[cart] - add product':
      return {
        cart: action.payload
      };
    case '[cart] - remove product':
      return {
        cart: state.cart.filter(product => product._id !== action.payload._id)
      };

    default:
      return state;
  };
};