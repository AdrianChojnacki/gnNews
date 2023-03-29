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
  useDisclosure,
} from "@chakra-ui/react";
import { NewsModal } from "@/components";
import { getFormattedDate } from "@/helpers";
import defaultImage from "public/news.jpg";
import type { NewsCardProps } from "@/types";

export const NewsCard = ({
  urlToImage,
  title,
  description,
  source,
  publishedAt,
  content,
  author,
  url,
}: NewsCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const layout = useSelector(getLayoutState);
  const date = getFormattedDate(publishedAt);

  return (
    <Card h='100%' cursor='pointer' onClick={onOpen}>
      <CardHeader>
        {layout === "tiles" && (
          <Image
            src={urlToImage ? urlToImage : defaultImage.src}
            alt={title}
            width='100%'
            height='250px'
            objectFit='cover'
            mb={3}
          />
        )}
        <Heading size='md'>{title}</Heading>
      </CardHeader>
      <CardBody py={0}>
        {layout === "tiles" && description && <Text mb={2}>{description}</Text>}
      </CardBody>
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
      <NewsModal
        title={title}
        content={content}
        author={author}
        url={url}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Card>
  );
};
