import React from "react";
import Image from "next/image";
import {Button, Icon, IconButton, Text} from "@chakra-ui/react";
import {Box, chakra, Flex, HStack, VStack} from "@chakra-ui/react";
import {FaShoppingCart} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi"
import {BsShopWindow} from "react-icons/bs";
import DrawerComponent from "../drawerComponent/DrawerComponent"
// Drawer
import { useDisclosure } from "@chakra-ui/react";
import { useShoping } from "../../context/context";
import useCart from "../../hooks/useCart";
import { getNumberOfItems } from "../../utils/helper";

const Header = (): JSX.Element => {
  const { onOpen } = useShoping();
  const {cart}= useCart()
  return (
    <Flex
      height={"6rem"}
      background={"primary.400"}
      justify={"space-between"}
      align={"center"}
      padding={10}
      position="sticky"
      zIndex={3}
      top={0}
    >
      {/* <Image
        width={"40rem"}
        height={"40rem"}
        src="/img/logo_home.jpeg"
        alt="logo"
      /> */}
      <Icon as={BsShopWindow} h={9} w={9} color={"whiteAlpha.900"} />
      <Flex>
        <Icon
          // aria-label={"nose que es"}
          as={FiShoppingCart}
          h={9}
          // mr={30}
          w={9}
          color={"whiteAlpha.900"}
          cursor={"pointer"}
          onClick={() => {onOpen()}}
        />

        <Text
          alignSelf={"end"}
          color={"whiteAlpha.900"}
          fontWeight={"bold"}
          fontSize={"md"}
        >
          {getNumberOfItems(cart)}

        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;


