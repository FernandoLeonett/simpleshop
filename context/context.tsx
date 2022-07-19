import {useState, createContext, ReactNode, useContext} from "react";

import {CartContextType} from "../interfaces/CartContextType";
import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";

const shoppingContext = createContext({});

interface Props {
  children: ReactNode;
}
export const ShoppingProvider = ({children}: Props): JSX.Element => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [search, setSearch] = useState("");
  const [products, setproducts] = useState()

  const storeCart = {
    search,
    setSearch,
    cart,
    setCart,
    selectedProduct,
    setSelectedProduct,
    products,
    setproducts
  };

  return <shoppingContext.Provider value={storeCart}>{children}</shoppingContext.Provider>;
};

export const useShoping = () => useContext(shoppingContext) as CartContextType;
