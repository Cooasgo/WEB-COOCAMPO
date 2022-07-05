import { useCallback, useContext, useRef, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from '../components/Images/Logo';
import { PasswordField } from '../components/Inputs/PasswordField';
import { InputUnform } from '../components/Inputs/Input';
import { Form } from '@unform/web';
import { AuthContext } from '../context/AuthContext';
import { apllyToast } from '../components/Toast';

export default function Login() {
  const formRef = useRef();
  const { signIn } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        await signIn(data);
        setLoading(false);
      } catch (error) {
        apllyToast('error', 'Problemas ao realizar login');
        console.log(error);
        setLoading(false);
      }
    },
    [signIn]
  );

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
          bg={useBreakpointValue({ base: 'white', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack
            as={Form}
            ref={formRef}
            onSubmit={handleFormSubmit}
            spacing="6"
          >
            <Stack spacing="5">
              <InputUnform id="cpf" name="cpf" label="Cpf" type="input" />

              <PasswordField name="password" />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Lembre de min</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Esqueceu sua senha?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button type="submit" variant="primary" isLoading={loading}>
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
