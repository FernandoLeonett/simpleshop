import React from "react";
import {Stack, Grid, Image, IconButton, GridItem} from "@chakra-ui/react";
import Imagen from "next/image";

import css from "./navbar.module.css";

const NavBar: React.FC = () => {
  return (
    <Grid templateColumns="repeat(2 , 1fr)">
      <GridItem h="10" w="100%">
        <img className="navbar__img--widht" src="/img/logo_home.jpeg" />
      </GridItem>
      <GridItem h="10" w="100%">
        <IconButton aria-label="lkdfjlkdsjlkfjs">
          <img className="navbar__img--widht" src="/img/logo_cart.jpeg" />
        </IconButton>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
