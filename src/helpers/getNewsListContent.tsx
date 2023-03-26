/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import {
  selectAllNews,
  getNewsStatus,
  getNewsError,
} from "@/context/newsSlice";

export const getNewsListContent = () => {
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const newsError = useSelector(getNewsError);

  let content;

  if (newsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (newsStatus === "succeeded") {
    content = <p>Liczba newsów: {news.length}</p>;
  } else if (newsStatus === "failed") {
    content = <p>{newsError}</p>;
  }

  return content;
};
