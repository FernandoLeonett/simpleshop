import CartItem from "../interfaces/CartItem";

export const responseUrl = (url: string): string => {
  const urlBase = "http://drive.google.com/uc?export=view&id=";
  const start = url.indexOf("/d/") + 3;
  const end = url.indexOf("/view");

  return urlBase + url.slice(start, end);
};

export const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};

export const textMessage = (cart: CartItem[]) => {
  let msg = "";

  cart.forEach((item) => {
    msg += `${item.product.title} -Precio Unitario:  ${parseCurrency(
      item.product.price,
    )} -unidades: ${item.quantityUnits} subtotal: ${parseCurrency(
      subTotal(item.product.id, cart),
    )}\n`;
  });
  msg += `Monto a pagar: ${parseCurrency(totalPrice(cart))}`;

  return msg;
};
const subTotal = (idSearched: string, cart: CartItem[]) => {
  const item = cart.find((item) => item.product.id === idSearched);
  const subTotal = item.product.price * item.quantityUnits;

  return subTotal;
};

export const getNumberOfItems = (cart: CartItem[]) => {
  const total = cart.reduce((acc, item) => {
    return (acc += item.quantityUnits);
  }, 0);

  return total;
};

const totalPrice = (cart: CartItem[]) =>
  cart.reduce((sum, item) => sum + subTotal(item.product.id, cart), 0);
