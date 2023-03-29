import { Box, ButtonGroup, Flex } from "@chakra-ui/react";
import { LayoutContainer } from "@/layout";
import { InfoButton, LayoutToggleButton } from "@/components";
import type { LayoutHeaderProps } from "@/types";

import Link from "next/link";

export const Header = ({ showLayoutButton }: LayoutHeaderProps) => {
  return (
    <Box bg='blue.100'>
      <LayoutContainer>
        <Flex alignItems='center' justifyContent='space-between'>
          <Box>
            <Link href='/'>gnNews</Link>
          </Box>
          <ButtonGroup spacing='0'>
            {showLayoutButton && <LayoutToggleButton />}
            <InfoButton />
          </ButtonGroup>
        </Flex>
      </LayoutContainer>
    </Box>
  );
};
