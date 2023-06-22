import { useCallback, useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { MemberTable } from '../components/Financial/FinancialTable'
import {
  AbsoluteCenter,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { apllyToast } from '../components/Toast';
import { CardXl, CardXl2 } from '../components/CardsQuote/Content';
import { api } from '../services/api';
import { AuthContext } from '../context/AuthContext';


interface FinancialTable {
  totalPg: number,
}

interface CotaCapital {
  TransacionadorCodigo: number,
  ContaLimiteCodigo: number,
  ContaLimiteNome: string,
  Limite: number,
  ValorUtilizado: number,
  ValorDisponivel: number,
}[]

interface CotaDelta {
    label: string,
    value: string,
    delta: { value: string, isUpwardsTrend: string },
}

export default function Financial() {
  const { user } = useContext(AuthContext)

  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState('')

  const [titiSelected, setTitiSelected] = useState<string[]>([])
  const [totalValue, setTotalValue] = useState('')

  const [capital, dataCapital] = useState<CotaDelta[]>([])

  const [sitDoc, setSitDoc] = useState('')

  const [cotCapital, setCotCapital] = useState([{
      label: 'Cota capital',
      value: 'R$ 0,00',
      delta: { value: '', isUpwardsTrend: 'green' },
  }])

  const [dataFinancialDebtis, setDataFinancialDebits] = useState({
    titulosPagos: {
      titulosPagosValorTotal: 0,
      titulosPagosQuantidade: 0
    },
    titulosPendentes: {
      titulosPendentesValorTotal: 0,
      titulosPendentesQuantidade: 0
    }
  })
  
  const handleSelectedTiti = useCallback(
    (id: string) => {
      if(!(JSON.parse(id).situacaoTitulo !== 'REGISTRADO')) {
        const alreadySelected = titiSelected.findIndex(item => item === id);
        if (alreadySelected >= 0) {
          const filteredItems = titiSelected.filter(item => item !== id);
  
          setTitiSelected(filteredItems);
        } else {
          setTitiSelected([...titiSelected, id]);
        }
        return
      }
      apllyToast('error', 'Status do titulo deve ser apenas REGISTRADO')

    },
    [titiSelected],
  );
  
  useEffect(() => {
  if(titiSelected.length > 0) {
    const formatedValue: FinancialTable[] = titiSelected.map(item => JSON.parse(item))
    console.log('r', formatedValue)
    const r = formatedValue.reduce((acum, vlrT) => {
      return acum + vlrT.totalPg;
    }, 0)

    setTotalValue(new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(r))
    // setTotalValue(r)
  }
  }, [titiSelected])

  const handlePrintTitiles = useCallback(() => {
    console.log('rrerere')
    setOpenAlert(true);
    setMessageAlert('Trabalhando nos arquivos...');
    setTimeout(() => {
      const titFromated = titiSelected.map(item => JSON.parse(item))
      titFromated.forEach(async data => {
         window.open(data.urlBoleto);
      });
      setOpenAlert(false);
    }, 3000);
  }, [titiSelected]);

  function handleClose() {
    setOpenAlert(!openAlert);
  }

  useEffect(() => {
    try {
      if(user) {
        api.get<[CotaCapital[]]>('/cooasgo-app-limites', {
          params: {
            TransacionadorCodigo: user.TransacionadorCodigo
          }
        }).then((response) => {
          const formated = response.data[0].map((item) => {
            const { ContaLimiteNome, ValorDisponivel, ContaLimiteCodigo } = item
            
            const stringWithoutSpaces = ContaLimiteNome.replace(/\s+/g, '');
            const formattedString = stringWithoutSpaces.charAt(0).toUpperCase() + stringWithoutSpaces.slice(1).toLowerCase();

            const formattedValue = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(ValorDisponivel)
            
            return {
              label: formattedString,
              value: formattedValue,
              delta: { value: String(ContaLimiteCodigo), isUpwardsTrend: 'green' },
            }
          })

          console.log('formated', formated)
          dataCapital(formated)
        })
      }
    } catch (err) {
      console.log(err)
    }
  }, [user])

  useEffect(() => {
    try {
     api.get('/tbs/rest/cobranca/titulo/calculando').then((response) => {
      setDataFinancialDebits(response.data)
     })
    } catch (err) {
      console.log(err)
    }
  }, [])
  useEffect(() => {
    try {
      if (user) {
        api.get('/cooasgo-app-extrato-cota-capital', {
          params: {
            TransacionadorCodigo: user.TransacionadorCodigo
          }
        }).then((response) => {
          console.log('resoibse', response.data)
          console.log('wefsdfsdfsdf', [{
            label: 'Cota capital',
            value: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(response.data[0][0].SaldoCotaCapital),
            delta: { value: '', isUpwardsTrend: 'green' },
          }])
          setCotCapital([{
            label: 'Cota capital',
            value: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(response.data[0][0].SaldoCotaCapital),
            delta: { value: '', isUpwardsTrend: 'green' },
          }])
        })
      }
    } catch (err) {
      console.log(err)
    }
  }, [user])

  const stats = [
    {
      label: 'Boletos pendentes',
      value: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(dataFinancialDebtis.titulosPendentes.titulosPendentesValorTotal),
      delta: { value: `${dataFinancialDebtis.titulosPendentes.titulosPendentesQuantidade} docs`, isUpwardsTrend: 'red' },
    },
    {
      label: 'Boletos quitados',
      value: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(dataFinancialDebtis.titulosPagos.titulosPagosValorTotal),
      delta: { value: `${dataFinancialDebtis.titulosPagos.titulosPagosQuantidade} docs`, isUpwardsTrend: 'green' },
    },
    {
      label: 'Total dos documentos',
      value: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(dataFinancialDebtis.titulosPagos.titulosPagosValorTotal + dataFinancialDebtis.titulosPendentes.titulosPendentesValorTotal),
      delta: { value: `${dataFinancialDebtis.titulosPendentes.titulosPendentesQuantidade + dataFinancialDebtis.titulosPagos.titulosPagosQuantidade} docs`, isUpwardsTrend: 'blue' },
    },
  ];

  const stats2 = [
    {
      label: 'Suinos',
      value: 'R$ 26,00',
      delta: { value: '1', isUpwardsTrend: true },
    },
    {
      label: 'Bovinos',
      value: 'R$ 60,00',
      delta: { value: '2', isUpwardsTrend: true },
    },
    {
      label: 'Agrícola - Safra',
      value: 'R$ 10,00',
      delta: { value: '3', isUpwardsTrend: false },
    },
    {
      label: 'Agrícola - Safrinha',
      value: 'R$ 10,00',
      delta: { value: '4', isUpwardsTrend: false },
    },
    {
      label: 'Geral',
      value: 'R$ 10,00',
      delta: { value: '5', isUpwardsTrend: false },
    },
  ];

  return (
    <>
      <Header />
      <Head>
        <title>Financeiro - Coocampo</title>
      </Head>
      <Container pt={{ base: '8', lg: '10' }} pb={{ base: '12', lg: '24' }}>
      {/* <Container py={{ base: '4', md: '8' }} px={{ base: '0', md: 8 }}> */}

      <Box
        bg="bg-surface"
        boxShadow={{ base: 'none', md: 'sm' }}
        borderRadius={{ base: 'none', md: 'lg' }}
      >
        <Box p="6">

         <Text fontSize="lg" fontWeight="medium">
                Resumo financeiro
          </Text>
        </Box>
        <Stack spacing="5" alignItems="center">
          <Box px={{ base: '4', md: '6' }} pt="5">
         
            <Stack direction={{ base: 'column', md: 'row' }} >
             
              {/* <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup> */}

                    <Flex  flexDir="column">

                    <Box position='relative' padding='10'>
                          <Divider />
                          <AbsoluteCenter bg='gray.200' px='4' borderRadius="0.5rem">
                            Saldo cota capital
                          </AbsoluteCenter>
                        </Box>
                        <Stack spacing={{ base: '5', lg: '6' }}>
                      <SimpleGrid gap="0.5">
                        {cotCapital?.map((stat, id) => (
                          <CardXl2 key={id} {...stat} />
                          ))}
                  
                      </SimpleGrid>
                      </Stack>

                       <Box position='relative' padding='10'>
                          <Divider />
                          <AbsoluteCenter bg='gray.200' px='4' borderRadius="0.5rem">
                            Saldo disponível por atividade
                          </AbsoluteCenter>
                        </Box>

                   <Box mb="2">

                    <Stack spacing={{ base: '5', lg: '6' }}>
                      <SimpleGrid gap="0.5">
                        {capital?.map((stat, id) => (
                          <CardXl2 key={id} {...stat} />
                          ))}
                  
                      </SimpleGrid>
                      </Stack>
                        </Box>

                        <Box position='relative' padding='10'>
                          <Divider />
                          <AbsoluteCenter bg='gray.200' px='4'  borderRadius="0.5rem">
                            Resumo de boletos
                          </AbsoluteCenter>
                        </Box>
                        
                        <Box> 

                    <Stack spacing={{ base: '5', lg: '6' }}>
                      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                        {stats?.map((stat, id) => (
                          <CardXl key={id} {...stat} setSitDoc={setSitDoc}/>
                          ))}

                      </SimpleGrid>
                    </Stack>
                        </Box>
                        </Flex>
            </Stack>
          </Box>

        
          <Box overflowX="auto">
            <MemberTable sitDoc={sitDoc} handleSelectedTiti={handleSelectedTiti} titiSelected={titiSelected} openAlert={openAlert} messageAlert={messageAlert} handleClose={handleClose}/>
          </Box>
          {/* <Box px={{ base: '4', md: '6' }} pb="5">
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
          </Box> */}
          
         
        
        </Stack>
        <Box  p="6">

            <Collapse in={titiSelected.length > 0} animateOpacity>

            <Box px={{ base: '4', md: '6' }} pb="5" justifyContent="space-between" display="flex">
              <Heading size="xs">Total a pagar {totalValue}</Heading>
              <Button colorScheme="blue" onClick={handlePrintTitiles}>Pagar</Button>
            </Box>
            </Collapse>
        </Box>
      </Box>
    </Container>
      {/* </Container> */}
      <Sidebar />
    </>
  );
}
