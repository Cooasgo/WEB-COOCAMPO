import { Box, Stack, Text } from '@chakra-ui/react';
import { Logo } from '../Images/Logo';

export default function Header() {
  return (
    <Box
      as="header"
      bg="bg-surface"
      pt={{ base: '4', md: '4' }}
      pb={{ base: '12', md: '4' }}
      display="flex"
      alignItems="center"
    >
      <Stack>
        <Logo size="39" />
      </Stack>
      <Stack ml="2">
        <Text fontSize="20" fontWeight="700">
          Painel Coocampo
        </Text>
      </Stack>
    </Box>
  );
}
