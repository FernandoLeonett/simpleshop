import {Dispatch, SetStateAction} from "react";

import CartItem from "./CartItem";
import Product from "./Product";

export interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  search:string
  setSearch: Dispatch<SetStateAction<string>>;
   products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  selectedProduct: Product;
  setSelectedProduct: Dispatch<SetStateAction<Product>>;
}
