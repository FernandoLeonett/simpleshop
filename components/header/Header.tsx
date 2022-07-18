// import {Flex} from "@chakra-ui/react";

// const Header = (props): JSX.Element => {
//   return (
//     <Flex
//       align="center"
//       as="nav"
//       bg={["primary.500", "primary.500", "primary.300", "primary.300"]}
//       color={["white", "white", "primary.700", "primary.700"]}
//       justify="space-between"
//       mb={8}
//       p={8}
//       w="100%"
//       wrap="wrap"
//       {...props}
//     >
//       <Flex
//         align="center"
//         direction={["column", "row", "row", "row"]}
//         justify={["center", "space-between", "flex-end", "flex-end"]}
//         pt={[4, 4, 0, 0]}
//       >
//         Create Account
//       </Flex>
//     </Flex>
//   );
// };

// export default Header;

import {ReactNode} from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
// import {HamburgerIcon, CloseIcon, AddIcon} from "@chakra-ui/icon";
import Link from "next/link";

import {ColorModeSwitcher} from "./ColorModeSwitcher";
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from "./navbar.module.css";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Todos",
    path: "/todos",
  },
  {
    name: "All Users",
    path: "/users/",
  },
  {
    name: "With MongoDB",
    path: "/with-mongo-db",
  },
];

const NavLink = ({children, path}: {children: ReactNode; path: string}) => (
  <Box
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    px={2}
    py={1}
    rounded={"md"}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex alignItems={"center"} h={16} justifyContent={"space-between"}>
          <IconButton
            aria-label={"Open Menu"}
            display={{md: "none"}}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size={"md"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"} spacing={8}>
            <Box>Logo</Box>
            <HStack as={"nav"} display={{base: "none", md: "flex"}} spacing={4}>
              {Links.map(({name, path}) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
            <ColorModeSwitcher />
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              colorScheme={"teal"}
              // leftIcon={<AddIcon />}
              mr={4}
              size={"sm"}
              variant={"solid"}
            >
              Action
            </Button>
            <Menu>
              <MenuButton as={Button} cursor={"pointer"} rounded={"full"} variant={"link"}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box display={{md: "none"}} pb={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({name, path}) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
