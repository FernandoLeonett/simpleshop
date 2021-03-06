import {
  Stack,
  Text,
  Button,
  chakra,
  useToast,
  Box,
  HStack,
  CloseButton,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { useShoping } from "../../context/context";
import useCart from "../../hooks/useCart";
import Product from "../../interfaces/Product";
import { parseCurrency } from "../../utils/helper";



interface Props {
  product: Product;
}

const Item = ({ product }: Props): JSX.Element => {


  const toast = useToast();
  const { addItem } = useCart();
  const { setSelectedProduct } = useShoping();
  const itemEffect = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  const handelarAddProduct = (product: Product) => {
    addItem(product);

    toast({
      title: `Agregado ${product.title}`,
      status: "success",
      isClosable: true,
      position: "top",

    })
  };

  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt", "onClick"].includes(prop),
  });

  return (
    <motion.li variants={itemEffect}>
      <Stack
        backgroundColor="orange.100"
        borderRadius="md"
        padding={4}
        spacing={3}
      >
        <Stack spacing={1}>
          <MyImage
            alt={product.title}
            as={motion.img}
            borderTopRadius="md"
            cursor={"pointer"}
            layoutId={product.image}
            // minHeight={128}
            maxHeight={128}
            objectFit="cover"
            src={product.image}
            onClick={() => setSelectedProduct(product)}
          />
          <Text color="primary.900" noOfLines={1}>
            {product.title}
          </Text>
          <Text color="primary.500" fontSize="sm" fontWeight="500">
            {parseCurrency(product.price)}
          </Text>
        </Stack>
        <Button
          borderRadius={40}
          colorScheme="primary"
          size="sm"
          variant="outline"
          onClick={() => {
            handelarAddProduct(product);
          }}
        >
          Agregar
        </Button>
      </Stack>
    </motion.li>
  );
};

export default Item;
