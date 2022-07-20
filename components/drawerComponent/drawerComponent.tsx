import { useState } from "react";
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
} from "@chakra-ui/react";
import CartItem from "../itemCart/ItemCart"
import useCart from "../../hooks/useCart";
import {getNumberOfItems, parseCurrency, totalPrice} from "../../utils/helper"
import { useShoping } from "../../context/context";
import Whatsasap from "../../components/whatsapp/Whatsaap"

const DrawerComponent = () => {

  const { isOpen, onClose } = useShoping()
  const { cart } = useCart()

  return (
    <Drawer size={"sm"} placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <HStack>
            <Box>
              <Text>{getNumberOfItems(cart)} articulos</Text>
            </Box>
          </HStack>
        </DrawerHeader>
        <DrawerCloseButton
          color={"primary.500"}
          _focus={{
            border: "none",
            background: "primary.50",
            boxShadow: " 0 0 5px rgba(255, 195, 0, 0.5 )",
          }}
        />
        <DrawerHeader borderBottomWidth="1px" color={"primary.500"}>
          Tu compra
        </DrawerHeader>
        <DrawerBody>
          {cart.map((item) => <CartItem key ={item.product.id} itemCart={item } />)}

        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <HStack>

        <Stack>

              <Text >Total: {parseCurrency(totalPrice(cart))}</Text>
          <HStack>
                <Text> Pagar con:  </Text>  <Whatsasap />
          </HStack>
        </Stack>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>)
}


export default DrawerComponent;
