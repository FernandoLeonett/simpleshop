import { Stack, Text, chakra, useToast } from "@chakra-ui/react";

import React from "react";

import useCart from "../../hooks/useCart";
import Product from "../../interfaces/Product";
import { parseCurrency } from "../../utils/helper";
import Image from "next/image"

interface Props {
  product: Product;
}

const Item = ({ product }: Props): JSX.Element => {
  const { addItem } = useCart();
  const toast = useToast()



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
    shouldForwardProp: (prop) => ["width", "height", "src", "alt", "onClick"].includes(prop),
  });

  return (

      <Stack
      backgroundColor="orange.100"
      borderRadius="md"
      padding={4}
      spacing={3}
      >
        <Stack spacing={1}>
        <MyImage
          alt={product.title}
          borderTopRadius="md"
          // cursor={"pointer"}
          maxHeight={128}
          width ={128}
          height={128}
          objectFit="cover"
          src={product.image}




          />
        <Text color="primary.900" noOfLines={1}>{product.title}</Text>
        <Text color="primary.500" fontSize="sm" fontWeight="500">
          {parseCurrency(product.price)}
        </Text>


        </Stack>

      </Stack>

  );
};

export default Item;
