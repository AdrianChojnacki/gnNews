import { useSelector } from "react-redux";
import { getAllNews, getNewsStatus } from "@/context/newsSlice";
import { Text } from "@chakra-ui/react";

export const NewsAmount = () => {
  const news = useSelector(getAllNews);
  const newsStatus = useSelector(getNewsStatus);

  let amount;

  if (newsStatus === "loading") {
    amount = "loading...";
  } else if (newsStatus === "succeeded") {
    amount = news.length;
  } else if (newsStatus === "failed") {
    amount = "some error occured...";
  }

  return <Text>Number of news: {amount}</Text>;
};
