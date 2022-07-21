import { Stack, Text, chakra } from "@chakra-ui/react";

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



  const handelarAddProduct = (product: Product) => {
    addItem(product);
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

          cursor={"pointer"}
          // maxWidth={100}
          // maxheight={100}

          // minHeight={128}
          width ={128}
          height={128}
          objectFit="cover"
          src={product.image}

           onClick={() => handelarAddProduct(product)}


          />
        <Text color="primary.900">{product.title}</Text>
        <Text color="primary.500" fontSize="sm" fontWeight="500">
          {parseCurrency(product.price)}
        </Text>


        </Stack>

      </Stack>

  );
};

export default Item;
