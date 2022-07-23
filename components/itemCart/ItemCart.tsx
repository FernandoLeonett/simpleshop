import React from "react";
import {
  HStack,
  Stack,
  VStack,
  Image,
  Box,
  StackDivider,
  Heading,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";

import CartItem from "../../interfaces/CartItem";
import { parseCurrency } from "../../utils/helper";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import useCart from "../../hooks/useCart";

interface Prop {
  itemCart: CartItem;
}

const ItemCart = ({ itemCart }: Prop): JSX.Element => {
  const [isSmallerThan385] = useMediaQuery("(max-width: 385px)")
  const { updateCart, removeItem } = useCart();

  const onMinus = () => {
    updateCart(itemCart.product, -1)
    // const updateItem = {...itemCart}
    // updateItem.quantityUnits= updateItem.quantityUnits-1

    // setCart((prev => [...prev.filter(c => c.product.id !== itemCart.product.id), updateItem]))


  }

  const onMore = () => {
    updateCart(itemCart.product, 1)


  }


  return (
    <>
      <HStack justify={"space-around"} py={"0.5rem"}>
        <Box>
          <Image
            borderRadius={"sm"}
            boxSize={"5rem"}
            maxHeight={isSmallerThan385 ? "50" : "100"}
            src={itemCart.product.image}
          />
          <Flex justifyContent={"space-between"} mt={"0.5rem"}>
            <IconButton
              onClick={() => onMore()}
              aria-label={""}
              size={"xs"}
              _focus={{
                border: "none",
                color: "primary.500",
              }}
            >
              <AddIcon fontSize={"sm"} />
            </IconButton>
            <Text fontSize={"lg"}>{itemCart.quantityUnits}</Text>
            <IconButton
              onClick={() => onMinus()}
              aria-label={""}
              size={"xs"}
              disabled={itemCart.quantityUnits === 1}
              _focus={{
                border: "none",
                color: "primary.500",
              }}
            >
              <MinusIcon fontSize={"sm"} />
            </IconButton>
          </Flex>
        </Box>
        <Box>
          <Center>
            <Text color={"primary.900"} noOfLines={1}>
              {itemCart.product.title}
            </Text>
          </Center>
          <TableContainer>
            <Table variant="unstyled" size={"sm"}>
              {/* <Thead>
              <Tr>
                <Th>{itemCart.product.title}</Th>
              </Tr>
            </Thead> */}
              <Tbody>
                <Tr>
                  <Td>Precio unitario</Td>
                  <Td isNumeric>{parseCurrency(itemCart.product.price)}</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Subtotal</Th>
                  <Th>
                    $
                    {parseCurrency(
                      itemCart.product.price * itemCart.quantityUnits
                    )}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        {/* <Box>
            <Text color="primary.900"> {itemCart.product.title}</Text>
          </Box>
          <Box>
            <Text>Precio: {parseCurrency(itemCart.product.price)}</Text>
          </Box>
          <Text>cant: {itemCart.quantityUnits} unids.</Text>
          <Box>
            <Text>subtotal: {subTotal(itemCart.product.id, cart)}</Text>
          </Box> */}
        <IconButton
          size={["xs", "md"]}
          aria-label=""
          onClick={() => removeItem(itemCart.product.id)}
          _focus={{
            border: "none",
            color: "primary.500",
          }}
        >
          <DeleteIcon alignSelf={"center"} fontSize={"lg"} />
        </IconButton>
      </HStack>
      <Divider />
      {/* divider = {<StackDivider borderColor="gray.200" />} */}
    </>
  );
};

export default ItemCart
