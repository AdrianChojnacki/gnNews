import { Box, Flex } from "@chakra-ui/react";
import { LayoutContainer } from "@/layout";
import { NewsAmount, Clock } from "@/components";
import type { LayoutFooterProps } from "@/types";

export const Footer = ({ showNewsAmount }: LayoutFooterProps) => {
  return (
    <Box bg='blue.200'>
      <LayoutContainer>
        <Flex alignItems='center' justifyContent='space-between'>
          <Box>{showNewsAmount && <NewsAmount />}</Box>
          <Clock />
        </Flex>
      </LayoutContainer>
    </Box>
  );
};
