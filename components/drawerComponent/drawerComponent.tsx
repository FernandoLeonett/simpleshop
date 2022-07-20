import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import CartItem from "../itemCart/ItemCart"
import useCart from "../../hooks/useCart";
import {parseCurrency, totalPrice} from "../../utils/helper"
import { useShoping } from "../../context/context";
import Whatsasap from "../../components/whatsapp/Whatsaap"

const DrawerComponent = () => {

  const { isOpen, onClose } = useShoping()
  const { cart } = useCart()

  return (
    <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
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
          {cart.map((item) => (
            <CartItem itemCart={{ ...item }} />
          ))}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Text color={"primary.500"}>
            Total: {parseCurrency(totalPrice(cart))}
          </Text>
        </DrawerFooter>
        <Whatsasap />
      </DrawerContent>
    </Drawer>
  );
}


export default DrawerComponent;
