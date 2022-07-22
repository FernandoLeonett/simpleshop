import { HStack } from "@chakra-ui/react";
import MercadoPago from "./MercadoPago";
import Whatsaap from "./Whatsaap";

interface prop {
  wap?: boolean;
  mp?: boolean;
}

const Payment = ({ wap = false, mp=true }: prop) => {
  return (
    <HStack>
      {wap && <Whatsaap />}
      {mp && <MercadoPago />}
    </HStack>
  );
};

export default Payment;
