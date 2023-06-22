import { useState, useEffect } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  HStack,
  Icon,
  Badge,
} from '@chakra-ui/react';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from 'react-icons/fi';

import * as React from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { TbPig, TbPlant, TbPlant2, TbMoneybag, TbReportMoney } from "react-icons/tb";

import ApexChart from '../Chart/ApexChart';
import { api } from '../../services/api';

interface Props {
  setSitDoc?: (sit: string) => void;
  label: string;
  value: string;
  minH?: string;
  delta: {
    value: string;
    isUpwardsTrend: string;
  };
}

interface PricingItems {
  Codigo_Produto: number,
  Nome_Produto: string,
  Preco_Dia: number,
}

export function Content() {
  const [pricingItems, setPricingItems ] = useState<Props[]>()
  useEffect(() => {
   try {
    api.get<PricingItems[]>('/cooasgo-app-cotacao-produtos').then((response) => {
      const formated = response.data.map((item, index) => {
        return {
          label: item.Nome_Produto,
          value: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(item.Preco_Dia),
          delta: {
            value: `${index + 0.5 * 1}%`,
            isUpwardsTrend: index > 1 ? 'red' : 'blue',
          }
        }
      })
      setPricingItems(formated)
    })

   } catch(err) {
    console.log(err)
   }
  }, [])
  // const stats = [
  //   {
  //     label: 'Milho Cooasgo',
  //     value: 'R$ 26,00',
  //     delta: { value: '3%', isUpwardsTrend: true },
  //   },
  //   {
  //     label: 'Soja Cooasgo',
  //     value: 'R$ 60,00',
  //     delta: { value: '2.3%', isUpwardsTrend: true },
  //   },
  //   {
  //     label: 'Farelo de soja Cooasgo',
  //     value: 'R$ 10,00',
  //     delta: { value: '0.1%', isUpwardsTrend: false },
  //   },
  // ];

  return (
    <Stack spacing={{ base: '8', lg: '6' }}>
      <Stack
        spacing="4"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
      >
        <Stack spacing="1">
          <Heading
            size={useBreakpointValue({ base: 'xs', lg: 'sm' })}
            fontWeight="medium"
          >
            Painel
          </Heading>
          <Text color="muted">Todas as métricas importantes em resumo</Text>
        </Stack>
        <Stack direction="row" spacing="3">
          <Button
            variant="secondary"
            leftIcon={<FiDownloadCloud fontSize="1.25rem" />}
          >
            Baixar
          </Button>
          <Button variant="primary">Criar</Button>
        </Stack>
      </Stack>

      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {pricingItems?.map((stat, id) => (
            <CardLG key={id} {...stat} />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          <CardXG minH="xs">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              bg="blue.200"
              w="100%"
              h="1.8rem"
              borderRadius="0.5rem 0.5rem 0 0"
            >
              <Text>Compras de medicamentos</Text>
            </Box>
            <Box height={270} w="98%">
              <ApexChart />
            </Box>
          </CardXG>
          <CardXG>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              bg="blue.200"
              w="100%"
              h="1.8rem"
              borderRadius="0.5rem 0.5rem 0 0"
            >
              <Text>Compras de rações</Text>
            </Box>
            <Box height={270} w="98%">
              <ApexChart />
            </Box>
          </CardXG>
        </SimpleGrid>
      </Stack>
      <CardXG minH="xs">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          bg="blue.200"
          w="100%"
          h="1.8rem"
          borderRadius="0.5rem 0.5rem 0 0"
        >
          <Text>Evolução peso boi</Text>
        </Box>
        <Box height={270} w="99%">
          <ApexChart />
        </Box>
      </CardXG>
      <CardXG minH="xs">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          bg="blue.200"
          w="100%"
          h="1.8rem"
          borderRadius="0.5rem 0.5rem 0 0"
        >
          <Text>Evolução peso boi</Text>
        </Box>
        <Box height={270} w="99%">
          <ApexChart />
        </Box>
      </CardXG>
    </Stack>
  );
}

export function CardLG(props: Props) {
  const { label, value, delta, minH, ...boxProps } = props;
  return (
    <Box
      minH="36"
      // bg="bg-surface"
      // boxShadow={useColorModeValue('sm', 'sm-dark')}
      // borderRadius="lg"

      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <HStack justify="space-between">
          <Text fontSize="sm" color="muted">
            {label}
          </Text>
          <Icon as={FiMoreVertical} boxSize="5" color="muted" />
        </HStack>
        <HStack justify="space-between">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
            {value}
          </Heading>
          <Badge
            variant="subtle"
            colorScheme={delta.isUpwardsTrend}
          >
            <HStack spacing="1">
              <Icon
                as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              />
              <Text>{delta.value}</Text>
            </HStack>
          </Badge>
        </HStack>
      </Stack>
    </Box>
  );
}

export function CardXG(props: BoxProps) {
  return (
    <Box
      minH="36"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      borderRadius="lg"
      {...props}
    />
  );
}

export function CardXl(props: Props) {
  const { label, value, delta, minH, setSitDoc,...boxProps } = props;
  const sitDoc = label === 'Boletos pendentes' ? 'REGISTRADO' : (label === 'Boletos quitados' ? 'BAIXADO' : '')
  return (
    <Box
      minH="22"
      // bg="bg-surface"
      // boxShadow={useColorModeValue('sm', 'sm-dark')}
      // borderRadius="lg"
      // as={Button}
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('xl', 'sm-dark')}
      mb="10"
      {...boxProps}
    >
      <Stack>
        <HStack justify="space-between">
          <Text fontSize="sm" color="muted">
            {label}
          </Text>
          <Button size="xs" onClick={() => setSitDoc(sitDoc)}>
          <Icon as={FiArrowUpRight}  color="muted" />
          </Button>
        </HStack>
        <HStack justify="space-between">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'xs' })}>
            {value}
          </Heading>
          <Badge
            variant="subtle"
            colorScheme={delta.isUpwardsTrend}
          >
            <HStack spacing="1">
              {/* <Icon
                as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              /> */}
              <Text>{delta.value}</Text>
            </HStack>
          </Badge>
        </HStack>
      </Stack>
    </Box>
  );
}
export function CardXl2(props: Props) {
  const { label, value, delta, minH, ...boxProps } = props;
  return (
    <Box
      minH="12"
      // bg="bg-surface"
      // boxShadow={useColorModeValue('sm', 'sm-dark')}
      // borderRadius="lg"
      // as={Button}
      w="100%"
      px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('xl', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <HStack justify="space-between">
          <Text fontSize="sm" color="muted">
            {label}
          </Text>
          {/* <Button size="xs">
          <Icon as={FiArrowUpRight}  color="muted" />
          </Button> */}
        </HStack>
        <HStack justify="space-between">
          <Heading size={useBreakpointValue({ base: 'sm', md: 'xs' })}>
            {value}
          </Heading>
          <Badge
            variant="subtle"
            colorScheme="blue"
          >
            <HStack spacing="1">
              <Icon
                as={delta.value === '1' || delta.value === '2' ? TbPig : (delta.value === '4' ? TbReportMoney : (delta.value === '5' ? TbPlant : (delta.value === '6' ?  TbPlant2 : TbMoneybag) ))}
                boxSize="5"
              />
              {/* <Text>{delta.value}</Text> */}
            </HStack>
          </Badge>
        </HStack>
      </Stack>
    </Box>
  );
}