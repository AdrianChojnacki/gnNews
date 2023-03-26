import { useSelector } from "react-redux";
import { selectAllCountries } from "@/context/countriesSlice";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export interface Country {
  name: string;
  id: string;
  flag: { src: string };
}

export default function Home() {
  const countries = useSelector(selectAllCountries);
  console.log(countries);

  const content = countries.map((country: Country) => (
    <Link key={country.id} href={`/country/${country.id}`}>
      <Image
        src={country.flag.src}
        alt={country.name}
        width={100}
        height={100}
      />
    </Link>
  ));

  return (
    <>
      <Head>
        <title>gnNews</title>
        <meta name='description' content='Home page of gnNews application' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Home</p>
      {content}
    </>
  );
}
