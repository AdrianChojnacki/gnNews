import { Container } from "@chakra-ui/react";
import type { LayoutProps } from "@/types";

export const LayoutContainer = ({ children }: LayoutProps) => {
  return (
    <Container maxW='7xl' py={4}>
      {children}
    </Container>
  );
};
