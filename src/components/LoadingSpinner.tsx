import { Center, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Center position='absolute' top='0' left='0' w='100%' h='100%'>
      <Spinner size='xl' color='blue.500' />
    </Center>
  );
};
