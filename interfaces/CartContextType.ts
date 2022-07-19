import {Dispatch, SetStateAction} from "react";

import CartItem from "./CartItem";
import Product from "./Product";
import ProductState from "./ProductState";

export interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  search:string
  setSearch: Dispatch<SetStateAction<string>>;
  //  products: ProductState;
  // setProducts: Dispatch<SetStateAction<ProductState>>;
  selectedProduct: Product;
  setSelectedProduct: Dispatch<SetStateAction<Product>>;
}
