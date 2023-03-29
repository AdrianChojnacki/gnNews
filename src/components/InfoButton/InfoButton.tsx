import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const InfoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme='blue'
        variant='ghost'
        fontSize='20px'
        onClick={onOpen}
      >
        <AiOutlineInfoCircle />
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wyzwanie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Największym wyzwaniem było odpowiednie otypowanie całości :)
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Zamknij</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
