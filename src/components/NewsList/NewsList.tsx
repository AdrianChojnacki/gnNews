import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllNews,
  getNewsStatus,
  getNewsError,
  fetchNews,
} from "@/context/newsSlice";
import { LoadingSpinner, NewsGrid } from "@/components";
import type { NewsListProps } from "@/types";

export const NewsList: FunctionComponent<NewsListProps> = ({ country }) => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const newsError = useSelector(getNewsError);

  useEffect(() => {
    if (country) dispatch(fetchNews(country));
  }, [country, dispatch]);

  let content;

  if (newsStatus === "loading") {
    content = <LoadingSpinner />;
  } else if (newsStatus === "succeeded") {
    content = <NewsGrid news={news} />;
  } else if (newsStatus === "failed") {
    content = <p>{newsError}</p>;
  }

  return <>{content}</>;
};
