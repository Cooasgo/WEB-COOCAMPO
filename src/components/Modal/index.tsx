/* eslint-disable react/require-default-props */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { useMemo } from 'react';

interface IpropsModal {
  title?: string;
  sizeSpecifyc?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'full'
    | 'xs'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
  onClose: any;
  isOpen: boolean;
  children: any;
  scrollBehavior?: 'inside' | 'outside';
  fullscreen?: boolean;
  closeOnOverlayClick?: boolean;
}

export function ModalComponent({
  title,
  children,
  isOpen,
  onClose,
  scrollBehavior,
  fullscreen,
  sizeSpecifyc,
  closeOnOverlayClick,
}: IpropsModal) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // const verifySizeWindowModal = useMemo(() => {
  //   if (fullscreen || !isWideVersion) {
  //     return 'full';
  //   }
  //   return 'lg';
  // }, [fullscreen, isWideVersion]);

  const verifySizeWindowModalSizeSpecifyc = useMemo(() => {
    if (fullscreen || !isWideVersion) {
      return 'full';
    }
    return sizeSpecifyc !== undefined ? sizeSpecifyc : 'lg';
  }, [fullscreen, isWideVersion, sizeSpecifyc]);

  return (
    <Box>
      <Modal
        blockScrollOnMount
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
        size={verifySizeWindowModalSizeSpecifyc}
        scrollBehavior={scrollBehavior || 'outside'}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        <ModalOverlay />
        <ModalContent bg="gray.700">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </Box>
  );
}
