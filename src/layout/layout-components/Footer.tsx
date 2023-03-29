import { Box, Container, Flex } from "@chakra-ui/react";
import { NewsAmount, Clock } from "@/components";
import type { LayoutFooterProps } from "@/types";

export const Footer = ({ showNewsAmount }: LayoutFooterProps) => {
  return (
    <Box bg='blue.200'>
      <Container maxW='7xl' py={2}>
        <Flex alignItems='center' justifyContent='space-between'>
          <Box>{showNewsAmount && <NewsAmount />}</Box>
          <Clock />
        </Flex>
      </Container>
    </Box>
  );
};
