


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
  Center,
} from "@chakra-ui/react";
import ItemCart from "../itemCart/ItemCart"
import useCart from "../../hooks/useCart";

import { useShoping } from "../../context/context";

import CartItem from "../../interfaces/CartItem";
import { memo, useEffect } from "react";
import { parseCurrency } from "../../utils/helper";
import Whatsaap from "../payment_component/Whatsaap";
import Payment from "../payment_component/Payment";


const DrawerComponent = () => {
  console.log("drawer")


  const { isOpen, onClose } = useShoping()
  const { cart , getNumberOfItems, totalCost} = useCart()


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
          <Text color={"primary.500"}>Tu compra hasta el momento</Text>
          <Text fontWeight={"thin"} color={"primary.500"}>
            {getNumberOfItems()} articulos
          </Text>
        </DrawerHeader>
        <DrawerBody>
          {cart.map((item ) => (

              <ItemCart key={item.product.id} itemCart={item} />

          ))}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">

          {Boolean(getNumberOfItems()) &&
          <Flex width={"100%"} justifyContent={"space-around"}>
            <Box fontWeight={"bold"} fontSize={"1.1rem"} color={"primary.500"}>
              <Text>Total: </Text>
              <Text> Pagar con: </Text>
            </Box>
            <Box>
              <Text fontSize={"1.3rem"}>{parseCurrency(totalCost)}</Text>
              <Payment />
            </Box>
          </Flex>
          }
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


export default DrawerComponent
