import {
  Box,
  Button,
  Center,
  Heading,
  LightMode,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

// import image_home from '../assets/home.png';

export default function Landing_page() {
  return (
    <Box
      as="section"
      bg="white"
      py="12"
      position="relative"
      h={{ base: '560px', md: '100vh' }}
      bgImage="url(https://user-images.githubusercontent.com/50926585/178729262-10df5bda-b4b6-4ebe-9729-5584554380f9.png)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.600',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color="white"
          h="full"
        >
          <Heading size="2xl" fontWeight="extrabold">
            Software Coocampo
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
            Tenha total controle sobre seu agronegócio
          </Text>
          <LightMode>
            <Button
              colorScheme="blue"
              size="lg"
              mt="6"
              fontWeight="bold"
              fontSize="md"
            >
              Acessar plataforma
            </Button>
          </LightMode>
        </Center>
      </Box>
      {/* <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        zIndex={2}
        w="full"
        bottom="0"
        py="4"
        bg="blackAlpha.400"
      >
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }}>
            <Box textAlign="center" color="white">
              <Text>A Gig is won every</Text>
              <Text fontSize="3xl">10 MIN</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Transactions</Text>
              <Text fontSize="3xl">6.4M+</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Text>Price Range</Text>
              <Text fontSize="3xl">$5k - $12K</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box> */}
    </Box>
  );
}
