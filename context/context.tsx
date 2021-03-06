import { useDisclosure } from "@chakra-ui/react";
import { useState, createContext, ReactNode, useContext } from "react";

import { CartContextType } from "../interfaces/CartContextType";
import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";
import ProductState from "../interfaces/ProductState";

const shoppingContext = createContext({});

interface Props {
  children: ReactNode;
}
export const ShoppingProvider = ({ children }: Props): JSX.Element => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateProducts, setproductsState] = useState<ProductState>(null);



  const storeCart = {
    stateProducts,
    setproductsState,
    isOpen,
    onOpen,
    onClose,
    cart,
    setCart,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <shoppingContext.Provider value={storeCart}>
      {children}
    </shoppingContext.Provider>
  );
};

export const useShoping = () => useContext(shoppingContext) as CartContextType;
