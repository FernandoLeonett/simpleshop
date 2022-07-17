import {Stack} from "@chakra-ui/react";
import {GetStaticProps} from "next";

import List from "../components/List/List";
import Animation from "../components/animation/Animation";
import Whatsasap from "../components/whatsapp/Whatsaap";
import useCart from "../hooks/useCart";
import api from "../services/api";
import Product from "../interfaces/Product";

interface Props {
  products: Product[];
}
const IndexRoute = ({products}: Props): JSX.Element => {
  const {cart} = useCart();

  return (
    <>
      <Stack spacing={6}>
        <List products={products} />

        {cart.length > 0 && <Whatsasap />}
      </Stack>
      <Animation />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 155,

    props: {
      products,
    },
  };
};

export default IndexRoute;
