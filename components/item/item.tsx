import { Stack, Text, Button, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { parseCurrency } from "../../utils/helper";

const Item = ({ product, setCart, setSelectedProduct }) => {
  const itemEffect = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt", "onClick"].includes(prop),
  });
  return (
    <motion.li key={product.id} variants={itemEffect}>
      <Stack
        backgroundColor="gray.100"
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
            maxHeight={128}
            objectFit="cover"
            src={product.image}
            onClick={() => setSelectedProduct(product)}
          />
          <Text>{product.title}</Text>
          <Text color="green.500" fontSize="sm" fontWeight="500">
            {parseCurrency(product.price)}
          </Text>
        </Stack>
        <Button
          borderRadius={40}
          colorScheme="primary"
          size="sm"
          variant="outline"
          onClick={() => setCart((cart) => [...cart, product])}
        >
          Agregar
        </Button>
      </Stack>
    </motion.li>
  );
};

export default Item;
