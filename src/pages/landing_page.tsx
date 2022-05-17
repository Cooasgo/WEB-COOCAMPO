import { Image, Box } from '@chakra-ui/react';

export default function Landing_page() {
  return (
    <Box
      h="100vh"
      w="100%"
      // backgroundImage="url(https://user-images.githubusercontent.com/105650591/168878394-8735d113-0d84-4350-87ee-ec1dd773ed3b.png)"
      backgroundRepeat="no-repeat"
    >
      <Image
        w="auto"
        src="https://user-images.githubusercontent.com/105650591/168907798-29c02452-7407-436e-8779-e0c4469b077a.jpg"
        alt="background_image"
      />
      <span>temporario</span>
    </Box>
  );
}
