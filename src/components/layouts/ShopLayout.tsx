import Head from "next/head"
import { FC, ReactNode, useContext } from "react";
import { Navbar } from "../ui/Navbar";
import { SideMenu } from "../ui/SideMenu";
import { UiContext } from "@/context/ui/UiContext";

interface Prop {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
};

export const ShopLayout:FC<Prop> = ({children, title, pageDescription, imageFullUrl}) => {

  const {isOpen, setIsOpen} = useContext(UiContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription}/>
        <meta name="og:title" content={title}/>
        <meta name="og:description" content={pageDescription}/>
        { imageFullUrl && <meta name="og:image" content={imageFullUrl}/> }
      </Head>

      <Navbar/>
      <SideMenu/>

      <main className={` max-w-[1440px] px-[30px] mx-auto my-[90px] ${isOpen && "blur-sm"} `}>
        {children}
      </main>

      <footer></footer>
    </>
  );
};
