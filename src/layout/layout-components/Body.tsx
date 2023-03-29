import { Box, Flex } from "@chakra-ui/react";
import { LayoutContainer, Sidebar } from "@/layout";
import type { LayoutBodyProps } from "@/types";

export const Body = ({ showSidebar, children }: LayoutBodyProps) => {
  return (
    <Box flex='1' position='relative' bg='blue.50'>
      <LayoutContainer>
        <Flex h='100%'>
          {showSidebar && <Sidebar />}
          <Box flex='1'>{children}</Box>
        </Flex>
      </LayoutContainer>
    </Box>
  );
};
