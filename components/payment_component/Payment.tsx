import { HStack } from "@chakra-ui/react";
import MercadoPago from "./MercadoPago";
import Whatsaap from "./Whatsaap";

interface PaymentProp {
  wap?: boolean;
  mp?: boolean;
}

const Payment = ({ wap = true, mp = true }: PaymentProp) => {
  return (
    <HStack>
      {wap && <Whatsaap />}
      {mp && <MercadoPago />}
    </HStack>
  );
};

export default Payment;
