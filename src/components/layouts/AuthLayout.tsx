import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui/Navbar";

interface Props {
  children: ReactNode;
  title: string;
};

export const AuthLayout:FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <div className="flex justify-center items-center h-[calc(100vh-200px)]">
          {children}
        </div>
      </main>
    </>
  );
};
