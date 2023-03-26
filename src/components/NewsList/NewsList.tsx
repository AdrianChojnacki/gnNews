import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllNews,
  getNewsStatus,
  getNewsError,
  fetchNews,
} from "@/context/newsSlice";
import { LoadingSpinner } from "@/components";
import type { NewsListProps } from "@/types";

export const NewsList: FunctionComponent<NewsListProps> = ({ country }) => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const newsError = useSelector(getNewsError);

  useEffect(() => {
    if (country && newsStatus === "idle") {
      dispatch(fetchNews(country));
    }
  }, [country, newsStatus, dispatch]);
  console.log(news);

  let content;

  if (newsStatus === "loading") {
    content = <LoadingSpinner />;
  } else if (newsStatus === "succeeded") {
    content = <p>Liczba newsów: {news.length}</p>;
  } else if (newsStatus === "failed") {
    content = <p>{newsError}</p>;
  }

  return <>{content}</>;
};
