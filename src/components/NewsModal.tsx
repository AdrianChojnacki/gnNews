import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { NewsModalProps } from "@/types";

export const NewsModal = ({
  title,
  content,
  author,
  url,
  isOpen,
  onClose,
}: NewsModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      size='xl'
      isCentered
      scrollBehavior='inside'
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={0}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>{content}</Text>
          <Text fontSize='sm'>{author}</Text>
          <Link href={url} isExternal color='blue.500' fontSize='sm'>
            {t("linkToFullArticle")}
          </Link>
        </ModalBody>
        <ModalFooter pt={0}>
          <Button onClick={onClose}>{t("close")}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
