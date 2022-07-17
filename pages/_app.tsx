import "../styles/global.css";
import {ChakraProvider} from "@chakra-ui/react";
import {AppProps} from "next/app";

import {ShoppingProvider} from "../context/context";
import LandingLayout from "../components/layouts/LandingLayout";
import theme from "../theme";
const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ShoppingProvider>
      <ChakraProvider theme={theme}>
        <LandingLayout>
          <Component Component {...pageProps} />
        </LandingLayout>
      </ChakraProvider>
    </ShoppingProvider>
  );
};

export default App;

// <ChakraProvider theme={theme}>

// </ChakraProvider>
