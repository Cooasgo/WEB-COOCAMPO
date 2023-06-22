import { useCallback, useContext, useRef, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
// import { Logo } from '../components/Images/Logo';
import { PasswordField } from '../components/Inputs/PasswordField';
import { InputUnform } from '../components/Inputs/Input';
import { Form } from '@unform/web';
import getValidationErrors from '../components/utils/getValidationErrors';
import { apllyToast } from '../components/Toast';
import { FormHandles } from '@unform/core';
import { AuthContext } from '../context/AuthContext';
import * as Yup from 'yup';

interface SingInFormData {
  user: string;
  password: string;
}

export default function Login() {
  const { signIn } = useContext(AuthContext)
  const formRef = useRef<FormHandles>(null);
  // const { signIn } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('Nome de usuário obigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });
         console.log('teste',data)
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn(data);
        setLoading(false);
      } catch (error) {
        console.log('error',error)
        if (error instanceof Yup.ValidationError) {
          setLoading(false);
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        apllyToast('error', 'Problemas ao realizar login');
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
          {/* <Logo size="57" /> */}
          <Center>
          <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/fbf4c4d8-ebb7-404e-96ae-72b5685c6418" alt="log" w="70%" />
          </Center>
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
          <Form ref={formRef} onSubmit={handleFormSubmit}>
          <Stack spacing="6">
            <Stack spacing="5">
              <InputUnform id="user" name="user" label="Usuário" type="input" />

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
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}
