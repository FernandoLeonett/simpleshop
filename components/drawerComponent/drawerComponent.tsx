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

const drawerComponent = (onClose) => {
     
     const [placement, setPlacement] = useState("right");
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Tu compra</DrawerHeader>
        <DrawerBody>
          <p>product 1</p>
          <p>product 2</p>
          <p>product 3</p>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Text>Total: 1234</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default drawerComponent;
