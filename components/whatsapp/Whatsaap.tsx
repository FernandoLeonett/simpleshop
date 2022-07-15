import { Flex, Button,Link } from "@chakra-ui/react"

import React from "react"
import { Product } from "../../product/types"
import { parseCurrency } from "../../utils/helper"
import { whatshapNumber } from "../../utils/userdata"
interface Props{
  cart:Product[]

}

const Whatsaap = ({cart}:Props):JSX.Element=> {


  const text:string = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.title} - ${parseCurrency(product.price)}\n`
            ),
          ``
        )
        .concat(
          `\nTotal: ${parseCurrency(
            cart.reduce((total, product) => total + product.price, 0)
          )}`
        ),
    [cart]
  );
  return (

          <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
            <Button
              isExternal
              as={Link}
              colorScheme="whatsapp"
              href={`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(text)}`}
              width="fit-content"
            >
              Completar pedido ({cart.length} productos)
            </Button>

          </Flex>

  )
}

export default Whatsaap
