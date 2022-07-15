import useShoping from "../context/context";
import { ItemCart, Product } from "../product/types";

const useCart=      ()=>{
const { cartList, setCartList } = useShoping();
const isEmpty = cartList.length === 0;

  const containElement = (element: any) =>
    cartList.some(({ item: { id } }) => element === id);

  const addItem = ( itemCart:ItemCart):boolean => {
    const element = cartList.find((e)=> e.item.id === itemCart.item.id)
    if (element) {
          itemCart.quantity+=1
          setCartList(

            (oldState)=> [oldState.filter(e=>e.item.id !=itemCart.item.id),itemCart]
          )

  }else{
    itemCart.quantity =1
      setCartList(

            (oldState)=> [oldState,itemCart]
          )



  }

  const totalItem = (idRow: any) =>
    cartList
      .filter(({ item: { id } }) => id === idRow)
      .reduce(
        (total: number, { quantity, item: { precio } }: any) => total + quantity * precio,
        0
      );

  const totalPrice = cartList.reduce(
    (sum: any, { item: { id } }: any) => sum + totalItem(id),
    0
  );

  const removeItem = (deleteId: any) => {
    const newList = cartList.filter(({ item: { id } }) => id !== deleteId);
    setCartList(newList);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(newList));
  };

  const clear = () => {
    setCartList([]);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify([]));
  };


};

export default useCart
