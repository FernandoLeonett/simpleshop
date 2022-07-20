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

const DrawerComponent = ({isOpen, onClose}) => {
  // const [placement, setPlacement] = useState("right");

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
          <p>product 1</p>
          <p>product 2</p>
          <p>product 3</p>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Text color={"primary.500"}>Total: 1234</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
