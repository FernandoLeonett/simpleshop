import { Heading, Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useState } from "react";

import List from "../components/List/List";
import Search from "../components/searchComponent/search";
import Animation from "../components/animation/Animation";
import Whatsasap from "../components/whatsapp/Whatsaap";
import useCart from "../hooks/useCart";
import api from "../services/api";
import Product from "../interfaces/Product";
import ProductState from "../interfaces/ProductState";
import style from "../styles/home.module.css"

interface Props {
  initialProducts: Product[];
}

const IndexRoute = ({ initialProducts }: Props): JSX.Element => {
  const [stateProducts, setproductsState] = useState<ProductState>({
    products: initialProducts,
    filteredProducts: initialProducts,
  });
  const { cart } = useCart();

  return (
    <>
      <Heading className ={style.title}>Bienvenidos a mi tienda</Heading>

      <Search setProductsState={setproductsState} />

      <Stack spacing={6}>
        <List products={stateProducts.filteredProducts} />

        {cart.length > 0 && <Whatsasap />}
      </Stack>
      <Animation />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialProducts = await api.list();

  return {
    revalidate: 155,

    props: {
      initialProducts,
    },
  };
};

export default IndexRoute;
