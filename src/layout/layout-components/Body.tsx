import { Box, Container, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import type { LayoutBodyProps } from "@/types";

export const Body = ({ hasSidebar, children }: LayoutBodyProps) => {
  let sidebar;

  if (hasSidebar) sidebar = <Sidebar />;

  return (
    <Container flex='1' maxW='7xl' bg='blue.50'>
      <Flex>
        {sidebar}
        <Box>{children}</Box>
      </Flex>
    </Container>
  );
};
