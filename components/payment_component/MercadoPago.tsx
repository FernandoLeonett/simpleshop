import {
  Link,
  IconButton,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";

const MercadoPago = () => {
  return (
    <IconButton as={Link} width="1.5" aria-label={""}>
      <Image src={"./img/mercado-pago.svg"} />
    </IconButton>
  )
}

export default MercadoPago
