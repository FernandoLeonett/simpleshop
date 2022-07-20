import {
  Flex,
  Text,
  Link,
  IconButton,
  Icon,
  Stack,
  Image,
  HStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import useCart from "../../hooks/useCart";
import { getNumberOfItems, textMessage } from "../../utils/helper";
import { whatshapNumber } from "../../utils/userdata";
import meercadoPago from "../../public/img/mercado-pago.svg";

const Whatsaap = (): JSX.Element => {
  const { cart } = useCart();

  return (
    // <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">

    <Stack>
      <HStack>

        <IconButton
          isExternal
          as={Link}
          colorScheme="whatsapp"
          href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(
            textMessage(cart)
          )}`}
          width="fit-content"
          aria-label={""}
        >
          <Icon as={FaWhatsapp}>
            Completar pedido ({getNumberOfItems(cart)} productos)
          </Icon>
        </IconButton>
        <IconButton width="1.5" aria-label={""}>
          <Image src={"./img/mercado-pago.svg"} />
        </IconButton>


      </HStack>

    </Stack>
  );
};

export default Whatsaap;
