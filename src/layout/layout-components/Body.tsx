import { Box, Container, Flex } from "@chakra-ui/react";
import { Sidebar } from "@/layout";
import type { LayoutBodyProps } from "@/types";

export const Body = ({ hasSidebar, children }: LayoutBodyProps) => {
  let sidebar;

  if (hasSidebar) sidebar = <Sidebar />;

  return (
    <Container flex='1' position='relative' maxW='7xl' bg='blue.50'>
      <Flex h='100%'>
        {sidebar}
        <Box flex='1'>{children}</Box>
      </Flex>
    </Container>
  );
};
