
import {Grid} from "@chakra-ui/react";
import {motion} from "framer-motion";

import Product from "../../interfaces/Product";
import Item from "../item/Item"

interface ProductsList {
  products: Product[];
}
const List = ({ products }: ProductsList): JSX.Element =>

  (


  <motion.ul
    animate="show"
    initial="hidden"
    variants={{
      hidden: {opacity: 0},
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    }}
  >
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
      {products.map((product: Product, i) => (
        <Item key={product.id} product={product} />
      ))}
    </Grid>
  </motion.ul>
);


export default List;


