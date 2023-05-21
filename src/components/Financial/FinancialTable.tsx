import {
  Badge,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react'
import { FiDownload, FiPaperclip } from 'react-icons/fi'
import { IoArrowDown } from 'react-icons/io5'

import { useEffect } from 'react';
import { apiTBHomologação } from '../../services/api';

import { financial } from './data';
import { formatDistance, isAfter, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useQuery } from 'react-query';


// interface Financial {
//   codigoRetorno: number,
//   mensagemRetorno: string,
//   titulos: [
//     {
//       dataVencimento: string,
//       nossoNumero: string,
//       pagador: {
//         inscricao: string,
//         nome: string
//       },
//       seuNumero: string,
//       usoEmpresa: string,
//       urlBoleto: string,
//       valor: number,
//       situacaoTitulo: string,
//       codigoBarras: string,
//     }
//   ]
// }


export function MemberTable() {
  // const [dataFinancial, setDataFinancial] = useState({})
  const query = useQuery('financials', async () => {
    await apiTBHomologação('/rest/cobranca/titulo/pesquisa', {
      params: {
        cpfCnpjPagador: '05639109173'
      }
    }).then(response => {
      console.log('response-01', response.data)
    })
  })

  useEffect(() => {
   try {
    apiTBHomologação.post('/rest/cobranca/titulo/pesquisa', {
      params: {
        cpfCnpjPagador: '05639109173'
      }
    }).then(response => {
      console.log('response-02', response.data)
    })
   } catch (error) {
    console.log('error', error)
   }
  }, [])

  console.log('query', query)
  return (
    <Table>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing="3">
            <Checkbox />
            <HStack spacing="1">
              <Text>Vencimento</Text>
              <Icon as={IoArrowDown} color="muted" boxSize="4" />
            </HStack>
          </HStack>
        </Th>
        <Th>Emp./Filial</Th>
        <Th>Status</Th>
        <Th>Atraso(Dias)</Th>
        <Th>Valor Parcela</Th>
        <Th>Juros/Desconto</Th>
        <Th>Valor Corrigido</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {financial.titulos.map((title) => (
        <Tr key={title.codigoBarras}>
          <Td>
             <HStack spacing="3">
              <Checkbox />
              <Text color="muted">
               {format(new Date(title.dataVencimento), 'MM/dd/yyyy')}
              </Text>
              </HStack> 
              {/* <Avatar src="data:image/png;base64,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" boxSize="10" />
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
                <Text color="muted">{member.handle}</Text>
              </Box> */}
          </Td>
          <Td>
            {/* <Badge size="sm" colorScheme={title.situacaoTitulo === 'EM_REGISTRO' ? 'green' : 'red'}>
              {title.situacaoTitulo}
            </Badge> */}
            70.356.449/0001-72
          </Td>
          <Td>
            <Badge size="sm" colorScheme={isAfter(new Date(), new Date(title.dataVencimento)) ? 'red' : 'green'}>
              {isAfter(new Date(), new Date(title.dataVencimento)) ? 'Titulo vencido' : 'Á vencer'}
            </Badge>

          </Td>
          <Td>
            <Text color="muted">
              {isAfter(new Date(), new Date(title.dataVencimento)) ? '' : '-'}
              {formatDistance(
                new Date(),
                new Date(title.dataVencimento),
                {locale: ptBR},
              )}
              </Text>
          </Td>
          <Td>
            <Text color="muted">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(title.valor)}
              </Text>
          </Td>
          <Td>
            <Text color="muted">
              {/* <Rating defaultValue={member.rating} size="xl" /> */}
              {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(0)}
            </Text>
          </Td>
          <Td>
            <Text color="muted">
            {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(title.valor)}
            </Text>
          </Td>
          <Td>

            <HStack spacing="1">
          <Tooltip label="Visualizar anexo" >
              <IconButton
                icon={<FiPaperclip fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Delete member"
                />
                </Tooltip>
              <Tooltip label="Baixar boleto" >
              <IconButton
                icon={<FiDownload fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Edit member"
                />
                </Tooltip>
            </HStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
  )
 
}