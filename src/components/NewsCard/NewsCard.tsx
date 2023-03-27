import { useSelector } from "react-redux";
import { getLayoutState } from "@/context/layoutSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { getFormattedDate } from "@/helpers";
import image from "public/news.jpg";
import type { NewsCardProps } from "@/types";

export const NewsCard = ({
  author,
  title,
  description,
  content,
  publishedAt,
  source,
}: NewsCardProps) => {
  const layout = useSelector(getLayoutState);
  const date = getFormattedDate(publishedAt);

  return (
    <Card h='100%'>
      <CardHeader pb={0}>
        {layout === "tiles" && <Image src={image.src} alt={title} />}
        <Heading size='sm'>{title}</Heading>
      </CardHeader>
      {layout === "tiles" && (
        <CardBody>
          <Text mb={2}>{description}</Text>
        </CardBody>
      )}
      <CardFooter>
        <Flex justifyContent='space-between' w='100%'>
          <Text fontSize='sm' textAlign='right'>
            {source.name}
          </Text>
          <Text fontSize='sm' textAlign='right'>
            {date}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};
