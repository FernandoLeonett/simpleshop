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
  Center,
  Tooltip,
} from "@chakra-ui/react";
import { filter } from "../../utils/helper";
import {FiRefreshCw} from "react-icons/fi";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
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
    <HStack mx={20} mb={5}>
      <InputGroup>
        <Input
          name="filteredProducts"
          value={search}
          htmlSize={30}
          placeholder="buscar productos"
          onChange={handleChangeSearch}
          _focus={{
            borderColor: "primary.100",
            boxShadow: " 0 0 3px rgba(255, 195, 0, 0.5 )",
          }}
        />

        <InputLeftElement>

          <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
            <SearchIcon />
          </Tooltip>

        </InputLeftElement>

      </InputGroup>
    </HStack>
  );
};

export default search;
