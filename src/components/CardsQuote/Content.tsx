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

interface Props {
  label: string;
  value: string;
  minH?: string;
  delta: {
    value: string;
    isUpwardsTrend: boolean;
  };
}

export function Content() {
  const stats = [
    {
      label: 'Milho Cooasgo',
      value: 'R$ 67,887',
      delta: { value: '3%', isUpwardsTrend: true },
    },
    {
      label: 'Suíno Cooasgo',
      value: 'R$ 56,87',
      delta: { value: '2.3%', isUpwardsTrend: true },
    },
    {
      label: 'Boi Cooasgo',
      value: 'R$ 12,87',
      delta: { value: '0.1%', isUpwardsTrend: false },
    },
  ];

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
          {stats.map((stat, id) => (
            <CardLG key={id} {...stat} />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          <CardXG minH="xs"></CardXG>
          <CardXG />
        </SimpleGrid>
      </Stack>
      <CardXG minH="xs" />
      <CardXG minH="xs" />
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
            colorScheme={delta.isUpwardsTrend ? 'green' : 'red'}
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
