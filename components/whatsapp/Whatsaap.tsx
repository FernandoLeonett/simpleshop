import {Flex, Button, Link, IconButton, Icon} from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import useCart from "../../hooks/useCart";
import {getNumberOfItems, textMessage} from "../../utils/helper";
import {whatshapNumber} from "../../utils/userdata";

const Whatsaap = (): JSX.Element => {
  const {cart} = useCart();

  return (
    // <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
      <IconButton

        isExternal
        as={Link}
        colorScheme="whatsapp"
        href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(textMessage(cart))}`}
        width="fit-content" aria-label={""}      >
        <Icon as={FaWhatsapp}>

          Completar pedido ({getNumberOfItems(cart)} productos)
          </Icon>

      </IconButton>
    // </Flex>
  );
};

export default Whatsaap;
