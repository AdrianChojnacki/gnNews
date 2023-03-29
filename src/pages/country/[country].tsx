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
        <title>gnNews {country}</title>
        <meta
          name='description'
          content={`gnNews application ${country} page`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NewsList country={country} />
    </>
  );
}
