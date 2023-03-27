import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getLayoutState } from "@/context/layoutSlice";
import { Box, Flex } from "@chakra-ui/react";
import { NewsCard } from "@/components";
import type { NewsGridProps } from "@/types";

export const NewsGrid = ({ news }: NewsGridProps) => {
  const layout = useSelector(getLayoutState);

  const colWidth = layout === "list" ? "100%" : "50%";

  const content = news.map(
    (item: any): ReactNode => (
      <Box key={item.title} w={colWidth} p={2}>
        <NewsCard {...item} />
      </Box>
    )
  );

  return (
    <Flex flexWrap='wrap' p={2}>
      {content}
    </Flex>
  );
};
