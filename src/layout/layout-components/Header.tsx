import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { LayoutContainer } from "@/layout";
import { InfoButton, LangToggleButton, LayoutToggleButton } from "@/components";
import type { LayoutHeaderProps } from "@/types";

import Link from "next/link";

export const Header = ({ showLayoutButton }: LayoutHeaderProps) => {
  return (
    <Box bg='blue.100'>
      <LayoutContainer>
        <Flex alignItems='center' justifyContent='space-between'>
          <Link href='/'>
            <Text fontSize='xl' fontWeight='bold'>
              gnNews
            </Text>
          </Link>
          <ButtonGroup spacing='0'>
            {showLayoutButton && <LayoutToggleButton />}
            <LangToggleButton />
            <InfoButton />
          </ButtonGroup>
        </Flex>
      </LayoutContainer>
    </Box>
  );
};
