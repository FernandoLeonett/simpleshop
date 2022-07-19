import React from "react";
import Image from "next/image";
import {Button, Icon, IconButton} from "@chakra-ui/react";
import {Box, chakra, Flex, HStack, VStack} from "@chakra-ui/react";
import {FaShoppingCart} from "react-icons/fa";

const Header = (): JSX.Element => {
  return (
    <Flex background={"gray"} justify={"space-between"} padding={6} position="sticky" top={0}>
      <Image height={100} src="/img/logo_home.jpeg" width={100} />

      <Icon
        aria-label={"nose que es"}
        as={FaShoppingCart}
        h={8}
        mr={30}
        w={8}
        onClick={() => alert("jol")}
      />
    </Flex>
  );
};

export default Header;
