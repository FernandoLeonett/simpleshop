import React from "react";
import { Flex } from "@chakra-ui/react";


const Header = (props:Object):JSX.Element => {

  return (
    <Flex
      align="center"
      as="nav"
      bg={["primary.500", "primary.500", "primary.300", "primary.300"]}
      color={["white", "white", "primary.700", "primary.700"]}
      justify="space-between"
      mb={8}
      p={8}
      w="100%"
      wrap="wrap"
      {...props}
    >
      <Flex
        align="center"
        direction={["column", "row", "row", "row"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        pt={[4, 4, 0, 0]}
      >
        Create Account
      </Flex>

    </Flex>
  );
};

export default Header;
