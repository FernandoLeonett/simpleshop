import {Box, Text, Icon, Flex} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex height={"5rem"} bg={"primary.400"} justify={"space-around"} alignItems={"center"}>
      <Text fontSize={"xl"} fontWeight={"bold"} color={"whiteAlpha.900"} >2900 11 11</Text>
      <Box>
        <Icon h={9} w={9} marginRight={2} color={"whiteAlpha.900"} as={FaWhatsapp} />
        <Icon h={9} w={9} marginRight={2} color={"whiteAlpha.900"} as={FaInstagram} />
        <Icon h={9} w={9} marginRight={2} color={"whiteAlpha.900"} as={FaFacebook} />
      </Box>
    </Flex>
  );
};

export default Footer;
