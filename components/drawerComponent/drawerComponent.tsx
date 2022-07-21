import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  HStack,
  Box,
  VStack,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import CartItem from "../itemCart/ItemCart"
import useCart from "../../hooks/useCart";
import { getNumberOfItems, parseCurrency, totalPrice } from "../../utils/helper"
import { useShoping } from "../../context/context";
import Whatsasap from "../../components/whatsapp/Whatsaap"


const DrawerComponent = () => {

  const { isOpen, onClose } = useShoping()
  const { cart } = useCart()

  return (
    <Drawer size={"sm"} placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <DrawerCloseButton
            color={"primary.500"}
            _focus={{
              border: "none",
              background: "primary.50",
              boxShadow: " 0 0 5px rgba(255, 195, 0, 0.5 )",
            }}
          />
          <Text color={"primary.500"}>Tu compra</Text>
          <Text fontWeight={"thin"}>{getNumberOfItems(cart)} articulos</Text>
        </DrawerHeader>
        <DrawerBody>
          {cart.map((item, i) => (
            <>
              <CartItem key={item.product.id} itemCart={item} />

            </>
          ))}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Box fontWeight={"bold"}>
              <Text>Total: </Text>
              <Text> Pagar con: </Text>
            </Box>
            <Box>
              {parseCurrency(totalPrice(cart))}
              <Whatsasap />
            </Box>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


export default React.memo(DrawerComponent);
