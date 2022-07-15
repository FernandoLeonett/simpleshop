import { Flex, chakra } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Product } from "../../product/types";
interface Props {
  selectedProduct: Product;
  setSelectedProduct: (value: Product) => void;
}
const Animation = ({
  selectedProduct,
  setSelectedProduct,
}: Props): JSX.Element => {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt", "onClick"].includes(prop),
  });
  return (

      <AnimatePresence>
        {selectedProduct && (
          <>
            <Flex
              key={selectedProduct.id}
              direction={"column"}
              alignItems="center"
              as={motion.div}
              backgroundColor="rgba(0,0,0,0.8)"
              height="100%"
              justifyContent="center"
              layoutId={selectedProduct.id}
              left={0}
              position="fixed"
              top={0}
              width="100%"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.figure>
                <MyImage
                  alt={"titulo"}
                  as={motion.img}
                  borderRadius="md"
                  maxHeight={300}
                  objectFit="cover"
                  src={selectedProduct.image}
                />
                <motion.figcaption>
                  {selectedProduct.description}
                </motion.figcaption>
              </motion.figure>
            </Flex>
          </>
        )}
      </AnimatePresence>

  );
};

export default Animation;
