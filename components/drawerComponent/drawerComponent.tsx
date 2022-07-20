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
} from "@chakra-ui/react";
import CartItem from "../itemCart/ItemCart"

const DrawerComponent = ({isOpen, onClose}) => {
  // const [placement, setPlacement] = useState("right");

  return (
    <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Tu compra</DrawerHeader>
        <DrawerBody>
        <CartItem/>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Text>Total: 1234</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
