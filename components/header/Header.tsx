import React from "react";
import Image from "next/image";
import {chakra, Flex} from "@chakra-ui/react";

const Header = (props: Object): JSX.Element => {
  const customImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Flex
      align="center"
      as="header"
      bg={"primary.300"}
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
        <customImage alt="logo" height="30rem" src="/img/logo.png" width="30rem" />
      </Flex>
    </Flex>
  );
};

export default Header;
