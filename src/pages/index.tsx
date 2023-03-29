import { useSelector } from "react-redux";
import { selectAllCountries } from "@/context/countriesSlice";
import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Image } from "@chakra-ui/react";
import type { Country } from "@/types";

export default function Home() {
  const countries = useSelector(selectAllCountries);

  const content = countries.map((country: Country) => (
    <Link key={country.id} href={`/country/${country.id}`}>
      <Image
        src={country.flag.src}
        alt={country.name}
        width={150}
        height={150}
        borderRadius={5}
      />
    </Link>
  ));

  return (
    <>
      <Head>
        <title>gnNews</title>
        <meta name='description' content='gnNews application home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Text mb={4} fontSize='xl'>
        Select country
      </Text>
      <Flex flexWrap='wrap' gap={4}>
        {content}
      </Flex>
    </>
  );
}
