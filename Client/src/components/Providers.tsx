"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { FC } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  session: any;
};

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextUIProvider>
  );
};

export default Providers;
