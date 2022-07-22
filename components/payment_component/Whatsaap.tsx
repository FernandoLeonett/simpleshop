import {
  Link,
  IconButton,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import useCart from "../../hooks/useCart";

import { whatshapNumber } from "../../utils/userdata";

const Whatsaap = (): JSX.Element => {
  const { getNumberOfItems,textMessage } = useCart();

  return (
    // <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">


      <IconButton
        isExternal
        as={Link}
        colorScheme="whatsapp"
        href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(
          textMessage()
        )}`}
        // width="fit-content"

        aria-label={"link de whatssap  para confirmar la compra"}
      >
        <Icon as={FaWhatsapp} boxSize={"2rem"}>
          Completar pedido ({getNumberOfItems()} productos)
        </Icon>
      </IconButton>


  );
};

export default Whatsaap;
