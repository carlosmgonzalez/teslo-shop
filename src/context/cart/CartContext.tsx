import { ICartProduct } from "@/interfaces/cart";
import {createContext} from "react";

interface ContextProps {
  cart: ICartProduct[];
  addProductToCart: (newProduct: ICartProduct) => void;
  removeProductToCart: (newProduct: ICartProduct) => void;
};

export const CartContext = createContext({} as ContextProps);