import {Dispatch, SetStateAction} from "react";

import CartItem from "./CartItem";
import Product from "./Product";

export interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  selectedProduct: Product;
  setSelectedProduct: Dispatch<SetStateAction<Product>>;
}
