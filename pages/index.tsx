import { Box, Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

import List from "../components/List/List";
import Search from "../components/searchComponent/Search";
import Animation from "../components/animation/Animation";
import api from "../services/api";
import Product from "../interfaces/Product";
import ProductState from "../interfaces/ProductState";
import DrawerComponent from "../components/drawerComponent/DrawerComponent";
import Swiper from "../components/Swiper/Swiper";
import{Heading, Center} from "@chakra-ui/react"



interface Props {
  initialProducts: Product[];
}

const IndexRoute = ({ initialProducts }: Props): JSX.Element => {
  const [stateProducts, setproductsState] = useState<ProductState>({
    products: initialProducts,
    filteredProducts: initialProducts,
  });




  return (
    <>


      <Container
        backgroundColor="white"
        borderRadius="sm"
        boxShadow="md"
        maxWidth="container.lg"
        padding={4}
      ><Center>
          <Heading as ={"h1"} >Ofertas con descuento</Heading>

      </Center>


        <Swiper products={initialProducts} />

</Container>

      {/* <Heading textAlign={"center"} py={20}>
          Banner
        </Heading> */}
      <Box p={4}>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxWidth="container.lg"
          padding={4}
        >

          <Search setProductsState={setproductsState} />
          <List products={stateProducts.filteredProducts} />

        </Container>
      </Box>
      <DrawerComponent />
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



