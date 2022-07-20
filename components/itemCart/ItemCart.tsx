import {
  HStack,
  Stack,
  VStack,
  Image,
  Box,
  StackDivider,
  Heading,
  Text,
  Icon,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import CartItem from "../../interfaces/CartItem";
import { parseCurrency, subTotal } from "../../utils/helper";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import useCart from "../../hooks/useCart";
interface Prop {
  itemCart: CartItem;
}

const ItemCart = ({ itemCart }: Prop): JSX.Element => {
  const { cart, setCart } = useCart();

  const onMinus=()=>{
    const updateItem = {...itemCart}
    updateItem.quantityUnits= updateItem.quantityUnits-1

    setCart((prev=> [...prev.filter(c=>c.product.id!=updateItem.product.id),updateItem]))


  }

  const onMore = () => {
    const updateItem = { ...itemCart }
    updateItem.quantityUnits = updateItem.quantityUnits + 1

    setCart((prev => [...prev.filter(c => c.product.id != updateItem.product.id), updateItem]))


  }


  return (
    <Stack>
      <HStack justify={"space-around"}>
        <Image
          borderRadius="full"
          boxSize="50px"
          mr={30}
          src={itemCart.product.image}
        />

        <VStack>
          <Box>
            <Text textAlign={"center"}> {itemCart.product.title}</Text>
          </Box>
          <Box>
            <Text textAlign={"start"}>
              Precio: {parseCurrency(itemCart.product.price)}
            </Text>
          </Box>
          <Text>cant: {itemCart.quantityUnits} unids.</Text>
          <Box>
            <Text textAlign={"start"}>
              subtotal: {subTotal(itemCart.product.id, cart)}
            </Text>
          </Box>
        </VStack>
        <Box>
          <Tooltip label={"esta desbiltado"}>
            <Button disabled>Submit</Button>
          </Tooltip>          {
            itemCart.quantityUnits>0 && <MinusIcon onClick={onMinus} />
          }

        </Box>
      </HStack>
      {/* divider = {<StackDivider borderColor="gray.200" />} */}
    </Stack>
  );
};

export default ItemCart;
