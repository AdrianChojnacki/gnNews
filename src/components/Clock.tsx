import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const stopwatch = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(stopwatch);
  }, []);

  if (!hydrated) return null;

  return <Box data-testid='clock'>{time.toLocaleTimeString()}</Box>;
};
