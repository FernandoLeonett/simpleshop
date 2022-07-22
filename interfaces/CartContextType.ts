import {Dispatch, SetStateAction} from "react";

import CartItem from "./CartItem";
import Product from "./Product";
import ProductState from "./ProductState";

export interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  search: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setSelectedProduct: Dispatch<SetStateAction<Product>>;
  stateProducts: ProductState;
  selectedProduct: Product
  setproductsState: Dispatch<SetStateAction<ProductState>>;
}
