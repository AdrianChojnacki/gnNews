import i18n from "i18next";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export const LangToggleButton = () => {
  const { language, changeLanguage } = i18n;
  const [lang, setLang] = useState(language);

  const handleClick = () => {
    if (lang === "pl") {
      changeLanguage("en");
      setLang("en");
    } else {
      changeLanguage("pl");
      setLang("pl");
    }
  };

  return (
    <Button
      colorScheme='blue'
      variant='ghost'
      fontSize='20px'
      onClick={handleClick}
    >
      {lang.toUpperCase()}
    </Button>
  );
};
