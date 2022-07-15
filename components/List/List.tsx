import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Product } from "../../product/types";
import Item from "../item/item";


interface Props {
  products: Product[];
  setSelectedProduct: (p: Product) => void;
  setCart: (p: Product[]) => void;
}
const List = ({ products, setSelectedProduct, setCart }:Props) :JSX.Element=> {
  return (
    <motion.ul
      animate="show"
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {products.map((product, i) => (
          <Item key={i}
            product={product}
            setSelectedProduct={setSelectedProduct}
            setCart={setCart}
          />
        ))}
      </Grid>
    </motion.ul>
  );
};

export default List;
