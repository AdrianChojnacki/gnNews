import { useSelector } from "react-redux";
import { getAllCountries } from "@/context/countriesSlice";
import Head from "next/head";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { CountryCard } from "@/components";
import { useTranslation } from "react-i18next";
import type { Country } from "@/types";

export default function Home() {
  const countries = useSelector(getAllCountries);
  const { t } = useTranslation();

  const content = countries.map((country: Country) => (
    <GridItem key={country.id}>
      <CountryCard {...country} />
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
      <Box>
        <Text mb={4} fontSize='xl'>
          {t("selectCountry")}
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
      </Box>
    </>
  );
}
