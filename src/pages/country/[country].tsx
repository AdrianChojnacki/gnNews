import { useRouter } from "next/router";
import Head from "next/head";
import { NewsList } from "@/components";

export default function Country() {
  const {
    query: { country },
  } = useRouter();

  return (
    <>
      <Head>
        <title>gnNews</title>
        <meta name='description' content='gnNews application home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NewsList country={country} />
    </>
  );
}
