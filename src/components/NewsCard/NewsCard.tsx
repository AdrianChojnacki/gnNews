import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getFormattedDate } from "@/helpers";
import type { NewsCardProps } from "@/types";

export const NewsCard = ({
  author,
  title,
  description,
  content,
  publishedAt,
  source,
}: NewsCardProps) => {
  const date = getFormattedDate(publishedAt);

  return (
    <Card>
      <CardHeader>
        <Heading size='sm'>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{source.name}</Text>
        <Text>{date}</Text>
      </CardBody>
    </Card>
  );
};
