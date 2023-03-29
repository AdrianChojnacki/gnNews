import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const stopwatch = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(stopwatch);
  });

  return <Box>{time.toLocaleTimeString()}</Box>;
};
