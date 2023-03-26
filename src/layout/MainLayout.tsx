import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { Header, Body, Footer } from "@/layout";
import type { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
  const {
    query: { country },
  } = useRouter();

  const hasSidebar = country ? true : false;

  return (
    <Flex flexDirection='column' height='100vh'>
      <Header />
      <Body hasSidebar={hasSidebar}>{children}</Body>
      <Footer />
    </Flex>
  );
};
