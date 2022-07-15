import React from "react";
import Header from "../header/Header"

import {Box, VStack, Heading, Divider, Container, Image, Text} from '@chakra-ui/react'
interface Props{
  contenido: React.ReactNode
}
const HomeContent = ({contenido}:Props):JSX.Element => {
  return (
    <Box padding={4}>
      <Header />
      <main>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
        >
          <VStack marginBottom={6}>
            <Image
              borderRadius={9999}
              src="https://unsplash.com/es/fotos/-YHSwy6uqvk"
            />
            <Heading>Esta es tu tienda</Heading>
            <Text>Bienvenido</Text>
          </VStack>

          {contenido}
          <Divider marginY={6} />
        </Container>
      </main>
    </Box>
  );
};

export default HomeContent;
