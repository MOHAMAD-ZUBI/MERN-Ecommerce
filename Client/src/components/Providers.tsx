"use client";
import API from "@/lib/API";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider, useSession } from "next-auth/react";
import { FC } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  session: any;
};
const queryClient = new QueryClient();
const Providers: FC<ProvidersProps> = ({ children, session }) => {
  if (session?.user) {
    const { token } = session?.user;
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    API.defaults.headers.common["Authorization"] = null;
  }
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <SessionProvider session={session}>{children}</SessionProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
};

export default Providers;
