import {Heading, VStack} from "@chakra-ui/react";
import Search from "../searchComponent/Search";

import Footer from "../footerComponent/FooterComponent";
import Header from "../header/Header";
interface Props {
  children: React.ReactNode;
}

function Layout({children}: Props): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
        </main>


      <Footer />
    </>
  );
}

export default Layout;
