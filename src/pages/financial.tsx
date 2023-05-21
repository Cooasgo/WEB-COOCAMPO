import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { MemberTable } from '../components/Financial/FinancialTable'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';


interface Financial {
  titulos: [
    {
      dataVencimento: string,
      nossoNumero: string,
      pagador: {
        inscricao: string,
        nome: string
      },
      seuNumero: string,
      usoEmpresa: string,
      urlBoleto: string,
      valor: number,
      situacaoTitulo: string,
      codigoBarras: string,
    }
  ]
}


export default function Financial() {
  const isMobile = useBreakpointValue({ base: true, md: false })


  return (
    <>
      <Header />
      <Head>
        <title>Financeiro - Coocampo</title>
      </Head>
      <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      {/* <Container py={{ base: '4', md: '8' }} px={{ base: '0', md: 8 }}> */}
      <Box
        bg="bg-surface"
        boxShadow={{ base: 'none', md: 'sm' }}
        borderRadius={{ base: 'none', md: 'lg' }}
      >
        <Stack spacing="5">
          <Box px={{ base: '4', md: '6' }} pt="5">
            <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
              <Text fontSize="lg" fontWeight="medium">
                Boletos
              </Text>
              {/* <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup> */}
            </Stack>
          </Box>
          <Box overflowX="auto">
            <MemberTable  />
          </Box>
          <Box px={{ base: '4', md: '6' }} pb="5">
            <HStack spacing="3" justify="space-between">
              {!isMobile && (
                <Text color="muted" fontSize="sm">
                  Showing 1 to 5 of 42 results
                </Text>
              )}
              <ButtonGroup
                spacing="3"
                justifyContent="space-between"
                width={{ base: 'full', md: 'auto' }}
                variant="secondary"
              >
                <Button>Previous</Button>
                <Button>Next</Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Container>
      {/* </Container> */}
      <Sidebar />
    </>
  );
}
