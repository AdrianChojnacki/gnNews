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
import { useTranslation } from "react-i18next";

export const InfoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

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
          <ModalHeader>{t("challenge")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{t("theBiggestChallengeWas")}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{t("close")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
