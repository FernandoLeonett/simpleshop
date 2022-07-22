
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



export const filter = (text: string, products: Product[]) => {
  const filteredProducts = [];

  products.forEach((product) => {
    if (
      ignoreAccentAndCase(product.description).includes(
        ignoreAccentAndCase(text)
      ) ||
      ignoreAccentAndCase(product.title).includes(ignoreAccentAndCase(text))
    ) {
      if (!filteredProducts.some((p) => p.id === product.id)) {
        filteredProducts.push(product);
      }
    }
  });

  return filteredProducts;
};


export const ignoreAccentAndCase = (pValue) => {

  const arr = [...pValue].map((ch) => repalceAccents(ch)).join().replaceAll(" ", "").replaceAll(",", "").toLocaleLowerCase();

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


