import React from "react";
import {GetStaticProps} from "next";
import {Stack} from "@chakra-ui/react";

import {Product} from "../product/types";
import api from "../product/api";
import Animation from "../components/animation/Animation";
import Whatsasap from '../components/whatsapp/Whatsaap'
import List from '../components/List/List'
import useShoping from "../context/context";


interface Props {
  products: Product[];
}
const IndexRoute = ({ products }: Props): JSX.Element => {

  // const [selectedProduct, setSelectedProduct] = React.useState<Product>(null);

const {selectedProduct, setSelectedProduct} = useShoping()
  return (
    <>
      <Stack spacing={6}>
        <List
          products={products}
          setSelectedProduct={setSelectedProduct}
          setCart={setCart}
        />

        {Boolean(cart.length) && <Whatsasap  cart={cart} />}
      </Stack>
      <Animation
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 1000000,

    props: {
      products,
    },
  };
};

export default IndexRoute;
