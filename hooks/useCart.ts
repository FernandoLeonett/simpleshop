import {useShoping} from "../context/context";
import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";
const useCart = () => {
  const {cart, setCart} = useShoping();

  function addItem(product: Product) {
    const newItem: CartItem = {
      product,
      quantityUnits: 1,
    };

    if (cart.length == 0) {
      setCart((prev) => [...prev, newItem]);
    } else {
      const found = cart.find((i) => i.product.id === product.id);

      if (found) {
        newItem.quantityUnits = found.quantityUnits + 1;
        setCart((prev) => [...prev.filter((e) => e.product.id !== product.id), newItem]);
      } else {
        setCart((prev) => [...prev, newItem]);
      }
    }
  }

  const removeItem = (deleteId: string) => {
    const newList = cart.filter(({product}) => product.id !== deleteId);

    setCart(newList);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(newList));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify([]));
  };

  return {
    cart,
    setCart,
    addItem,
    clearCart,
    removeItem,
  };
};

export default useCart;
