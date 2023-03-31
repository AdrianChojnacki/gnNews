import Link from "next/link";
import { Image } from "@chakra-ui/react";
import type { Country } from "@/types";

export const CountryCard = ({ name, id, flag }: Country) => {
  return (
    <Link href={`/country/${id}`}>
      <Image
        src={flag.src}
        alt={name}
        width='100%'
        objectFit='contain'
        borderRadius={5}
      />
    </Link>
  );
};
