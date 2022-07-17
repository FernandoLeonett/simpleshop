import {Flex, Button, Link} from "@chakra-ui/react";
import React from "react";

import useCart from "../../hooks/useCart";
import {getNumberOfItems, textMessage} from "../../utils/helper";
import {whatshapNumber} from "../../utils/userdata";

const Whatsaap = (): JSX.Element => {
  const {cart} = useCart();

  return (
    <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
      <Button
        isExternal
        as={Link}
        colorScheme="whatsapp"
        href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(textMessage(cart))}`}
        width="fit-content"
      >
        Completar pedido ({getNumberOfItems(cart)} productos)
      </Button>
    </Flex>
  );
};

export default Whatsaap;
