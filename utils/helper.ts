import CartItem from "../interfaces/CartItem";
import Product from "../interfaces/Product";

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
      item.product.price
    )} -unidades: ${item.quantityUnits} subtotal: ${parseCurrency(
      subTotal(item.product.id, cart)
    )}\n`;
  });
  msg += `Monto a pagar: ${parseCurrency(totalPrice(cart))}`;

  return msg;
};
export const subTotal = (idSearched: string, cart: CartItem[]) :number=> {
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

export const totalPrice = (cart: CartItem[]) =>
  cart.reduce((sum, item) => sum + subTotal(item.product.id, cart), 0);

export const filter = (text: string, products: Product[]) => {
  const filteredProducts = [];

  products.forEach((product) => {
    if (
      ignoreAccentAndCase(product.description).includes(
        ignoreAccentAndCase(text)
      ) ||
      ignoreAccentAndCase(product.title).includes(text)
    ) {
      if (!filteredProducts.some((p) => p.id === product.id)) {
        filteredProducts.push(product);
      }
    }
  });

  return filteredProducts;
};


export const ignoreAccentAndCase = (pValue) => {
  const value = pValue.replaceAll(" ", "").toLocaleLowerCase();
  const arr = [...value].map((ch) => repalceAccents(ch)).join();
  return arr;
};

const repalceAccents = (value) => {
  switch (value) {
    case "á":
      return "a";
    case "é":
      return "e";
    case "í":
      return "i";
    case "ó":
      return "o";
    case "ú":
      return "u";
    case "ü":
      return "u";
    default:
      return value;
  }
};


