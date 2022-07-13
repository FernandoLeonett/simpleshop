import React from "react";
import {GetStaticProps} from "next";
import {Button, Flex, Grid, Link, Stack, Text, chakra} from "@chakra-ui/react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";

import {Product} from "../product/types";
import api from "../product/api";
import {whatshapNumber} from "../utils/userdata";

interface Props {
  products: Product[];
}

const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string>(null);
  const text = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
          ``,
        )
        .concat(
          `\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`,
        ),
    [cart],
  );
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt", "onClick"].includes(prop),
  });

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {opacity: 0, scale: 0},
    show: {opacity: 1, scale: 1},
  };

  // return (
  //   <motion.ul animate="show" initial="hidden" variants={container}>
  //     <motion.li size={50} variants={item} />
  //     <motion.li size={50} variants={item} />
  //   </motion.ul>
  // );

  return (
    <>
      <Stack spacing={6}>
        <motion.ul animate="show" initial="hidden" variants={container}>
          <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
            {products.map((product) => (
              <motion.li key={product.id} variants={item}>
                <Stack backgroundColor="gray.100" borderRadius="md" padding={4} spacing={3}>
                  <Stack spacing={1}>
                    <MyImage
                      alt={product.title}
                      as={motion.img}
                      borderTopRadius="md"
                      cursor={"pointer"}
                      layoutId={product.image}
                      maxHeight={128}
                      objectFit="cover"
                      src={product.image}
                      onClick={() => setSelectedImage(product.image)}
                    />
                    <Text>{product.title}</Text>
                    <Text color="green.500" fontSize="sm" fontWeight="500">
                      {parseCurrency(product.price)}
                    </Text>
                  </Stack>
                  <Button
                    colorScheme="primary"
                    size="sm"
                    variant="outline"
                    onClick={() => setCart((cart) => cart.concat(product))}
                  >
                    Agregar
                  </Button>
                </Stack>
              </motion.li>
            ))}
          </Grid>
        </motion.ul>
        {Boolean(cart.length) && (
          <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(text)}`}
              width="fit-content"
            >
              Completar pedido ({cart.length} productos)
            </Button>
          </Flex>
        )}
      </Stack>
      <AnimatePresence>
        {selectedImage && (
          <Flex
            key="brackdrop"
            alignItems="center"
            as={motion.div}
            backgroundColor="rgba(0,0,0,0.8)"
            height="100%"
            justifyContent="center"
            layoutId={selectedImage}
            left={0}
            position="fixed"
            top={0}
            width="100%"
            onClick={() => setSelectedImage(null)}
          >
            <MyImage
              key="image"
              alt={"titulo"}
              as={motion.img}
              borderRadius="md"
              maxHeight={300}
              objectFit="cover"
              src={selectedImage}
            />
          </Flex>
        )}
      </AnimatePresence>
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
