import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  InputLeftElement,
  Input,
  InputGroup,
  Stack,
  InputRightElement,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { filter } from "../../utils/helper";

import { Search2Icon } from "@chakra-ui/icons";
import ProductState from "../../interfaces/ProductState";

import { useShoping } from "../../context/context";

interface Props {
  setProductsState: Dispatch<SetStateAction<ProductState>>;
}

const search = ({ setProductsState }: Props) => {

  const [search, setSearch] = useState("");

  const handlerResfresh = (e) => {
    setSearch(() => "");
    setProductsState((prev) => ({ ...prev, [e.target.name]: prev.products }));
  };

  const handleChangeSearch = (e) => {
    setSearch(() => e.target.value);
  };

  const filtering = (search: string) => {
    setProductsState((prev) => ({
      ...prev,
      filteredProducts: filter(search, prev.products),
    }))
  };
  useEffect(() => {
      const handler = setTimeout(() => {
        filtering(search);
      }, 500);

  return () => {
      clearTimeout(handler);
    };
  }, [search]);



  return (
    <HStack>
      <InputGroup>
        <Input
          name="filteredProducts"
          value={search}
          htmlSize={30}
          placeholder="buscar productos"
          onChange={handleChangeSearch}
        />

        <InputLeftElement>
          <Search2Icon />
        </InputLeftElement>
      </InputGroup>
      <IconButton onClick={handlerResfresh} variant="unstyled" aria-label={""}>
        <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-refresh-arrows-dreamstale-lineal-dreamstale.png" />
      </IconButton>
    </HStack>
  );
};

export default search;
