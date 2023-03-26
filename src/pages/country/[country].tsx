import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllNews,
  getNewsStatus,
  getNewsError,
  fetchNews,
} from "@/context/newsSlice";
import Head from "next/head";

export default function Country() {
  const {
    query: { country },
  } = useRouter();

  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const newsError = useSelector(getNewsError);

  useEffect(() => {
    if (country && newsStatus === "idle") {
      dispatch(fetchNews(country));
    }
  }, [country, newsStatus, dispatch]);

  let content;

  if (newsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (newsStatus === "succeeded") {
    console.log(news);
    content = <p>Liczba newsów: {news.length}</p>;
  } else if (newsStatus === "failed") {
    content = <p>{newsError}</p>;
  }

  return (
    <>
      <Head>
        <title>gnNews</title>
        <meta name='description' content='Home page of gnNews application' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {content}
    </>
  );
}
