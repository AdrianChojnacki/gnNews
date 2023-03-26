import { Container, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Container maxW='7xl' bg='blue.100'>
      <Flex alignItems='center' justifyContent='space-between'>
        <Box>
          <Link href='/'>gnNews</Link>
        </Box>
        <Box>Utils</Box>
      </Flex>
    </Container>
  );
};
