import React from "react";
import "../index.css"
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {AppProps} from "next/app";


import LandingLayout from "../components/layouts/LandingLayout";
import theme from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return(  <ChakraProvider theme={theme}>
    <LandingLayout>
      <Component Component {...pageProps} />
    </LandingLayout>
  </ChakraProvider>)


};


export default App;

 // <ChakraProvider theme={theme}>

    // </ChakraProvider>
