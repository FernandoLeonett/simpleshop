import {Heading, VStack} from "@chakra-ui/react";
import Search from "../searchComponent/search";
import HomeContent from "../custom_style_component/HomeContent";
import Footer from "../footerComponent/footerComponent";
import Header from "../header/Header";
interface Props {
  children: React.ReactNode;
}

function Layout({children}: Props): JSX.Element {
  return (
    <>
      <Header />
      <Heading>Banner</Heading>
      {/* <VStack marginBottom={6}> */}
      {/* <Image borderRadius={9999} src="https://unsplash.com/es/fotos/-YHSwy6uqvk" /> */}
      {/* <Text>Bienvenido</Text> */}
      {/* </VStack> */}
      <HomeContent contenido={children} />;
      <Footer />
    </>
  );
}

export default Layout;
