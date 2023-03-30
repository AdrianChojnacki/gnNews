import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getLayoutState } from "@/context/layoutSlice";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { NewsCard } from "@/components";
import type { NewsGridProps } from "@/types";

export const NewsGrid = ({ news }: NewsGridProps) => {
  const layout = useSelector(getLayoutState);

  const mobileGrid = "repeat(1, 1fr)";
  const columns = layout === "list" ? 1 : 2;

  const content = news.map(
    (item: any): ReactNode => (
      <GridItem key={item.title}>
        <NewsCard {...item} />
      </GridItem>
    )
  );

  return (
    <Grid
      templateColumns={[mobileGrid, mobileGrid, `repeat(${columns}, 1fr)`]}
      gap={4}
    >
      {content}
    </Grid>
  );
};
