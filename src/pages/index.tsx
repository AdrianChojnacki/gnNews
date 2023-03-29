import { useSelector } from "react-redux";
import { selectAllCountries } from "@/context/countriesSlice";
import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import type { Country } from "@/types";

export default function Home() {
  const countries = useSelector(selectAllCountries);

  const content = countries.map((country: Country) => (
    <GridItem key={country.id}>
      <Link href={`/country/${country.id}`}>
        <Image
          src={country.flag.src}
          alt={country.name}
          width='100%'
          objectFit='contain'
          borderRadius={5}
        />
      </Link>
    </GridItem>
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
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={4}
      >
        {content}
      </Grid>
    </>
  );
}
