import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from '../components/Images/Logo';
import { PasswordField } from '../components/Inputs/PasswordField';

export default function Login() {
  return (
    <Container
      maxW="lg"
      py={{ base: '8', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo size="57" />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Faça login na sua conta
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input id="cpf" type="number" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Lembre de min</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Esqueceu sua senha?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Entrar</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
