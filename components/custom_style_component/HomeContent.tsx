import React from "react";
import {FaSearch} from "react-icons/fa";
import {
  Icon,
  Box,
  VStack,
  Heading,
  Divider,
  Container,
  Image,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

interface Props {
  contenido: React.ReactNode;
}
const HomeContent = ({contenido}: Props): JSX.Element => {
  return (
    <Box padding={4}>
      <Divider marginY={6} />
      <main>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
        >
          {contenido}
        </Container>
      </main>
    </Box>
  );
};

export default HomeContent;
