import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { Header, Body, Footer } from "@/layout";
import type { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
  const {
    query: { country },
  } = useRouter();

  const showLayoutButton = country ? true : false;
  const showSidebar = country ? true : false;
  const showNewsAmount = country ? true : false;

  return (
    <Flex flexDirection='column' height='100vh'>
      <Header showLayoutButton={showLayoutButton} />
      <Body showSidebar={showSidebar}>{children}</Body>
      <Footer showNewsAmount={showNewsAmount} />
    </Flex>
  );
};
