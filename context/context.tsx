import React, { useContext } from "react";
import { createContext } from "react";
import { ItemCart } from "../product/types";



const shoppingContext = createContext(undefined);


const shoppingProvider=({children})=>{
    const [cartList, setCartList] = React.useState<ItemCart[]>([]);
    const store = {
      cartList,
      setCartList,
    };


  return(
  <shoppingContext.Provider value={store}>
    {children}
  </shoppingContext.Provider>
  )
}

export default function useShoping(){ return useContext(shoppingContext)}
