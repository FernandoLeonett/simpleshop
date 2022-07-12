import axios from "axios";
import Papa from "papaparse";

import {urlCliente} from "../utils/userdata";

import {Product} from "./types";

export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(urlCliente, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<Product[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data as Product[];

                console.log(products);

                return resolve(
                  products.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  })),
                );
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
};
