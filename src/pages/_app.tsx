import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import LogoImg from "../assets/Logo.svg";
import { CartMenu, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { useState } from "react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [openModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Logo" />

        <CartMenu onClick={() => setIsOpenModal(!openModal)}>
          <Handbag size={24} weight="bold" />
          <span>1</span>
        </CartMenu>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
