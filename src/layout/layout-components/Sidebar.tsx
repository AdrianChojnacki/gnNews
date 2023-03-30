import { useSelector } from "react-redux";
import { getAllCountries } from "@/context/countriesSlice";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/types";

export const Sidebar = () => {
  const countries = useSelector(getAllCountries);

  const content = countries.map((country: Country) => (
    <Link key={country.id} href={`/country/${country.id}`}>
      <Image src={country.flag.src} alt={country.name} width={20} height={20} />
    </Link>
  ));

  return (
    <Flex flexDirection={["row", "column"]} flexWrap='wrap' gap={2}>
      {content}
    </Flex>
  );
};
