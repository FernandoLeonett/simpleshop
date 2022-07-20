import { Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useState } from "react";

import List from "../components/List/List";
import Search from "../components/searchComponent/search";
import Animation from "../components/animation/Animation";
import useCart from "../hooks/useCart";
import api from "../services/api";
import Product from "../interfaces/Product";
import ProductState from "../interfaces/ProductState";
import Swiper from "../components/Swiper/Swiper"
import DrawerComponent from "../components/drawerComponent/DrawerComponent";

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
      <Swiper products={stateProducts.filteredProducts} />
      <Search setProductsState={setproductsState} />

      {/* <Stack spacing={6}> */}
        <List products={stateProducts.filteredProducts} />
        <DrawerComponent />
      {/* </Stack> */}
      <Animation />
    </>
  );
};

export default IndexRoute;

export const getStaticProps: GetStaticProps = async () => {
  const initialProducts = await api.list();

  return {
    revalidate: 155,

    props: {
      initialProducts,
    },
  };
};



