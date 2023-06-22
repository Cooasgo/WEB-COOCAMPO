import { useContext, useEffect, useState } from 'react';
import { Box, Stack, Text,Flex, Button, Center, Image, useBreakpointValue } from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext'
import { FiLogOut } from 'react-icons/fi';

interface User {
	Usuario: string,
	TransacionadorCodigo: string,
	TransacionadorNome: string,
	CPF: string,
	Email: string
}

export default function Header() {
  const { user, signOut } = useContext(AuthContext)
  const [userData, setDataUser] = useState<User>()
  useEffect(() => {
   setDataUser(user)
  }, [user])

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });


  return (
    <Box
      as="header"
      bg="bg-surface"
      pt={{ base: '4', md: '4' }}
      pb={{ base: '12', md: '4' }}
      display="flex"
      alignItems="center"

    >
      <Stack ml="10" display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" w="100%"  pr={isWideVersion ? "10rem" : ''} >
      <Stack flexDirection="row" >
        {/* <Logo size="39" /> */}
        <Center>
          <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/fbf4c4d8-ebb7-404e-96ae-72b5685c6418" alt="log" w={isWideVersion ? "15rem" : '10rem'} />
            {/* <Text as="span" fontSize="20" fontWeight="700">
              Painel Coocampo
            </Text> */}
          </Center>
      </Stack>

      <Flex direction="row" alignItems="center">
        {isWideVersion &&  (
        <Text as="span" fontSize="14" fontWeight="400" pr="3">
        {userData?.TransacionadorNome}
        </Text>

        )}
        <Button type="button" size="sm" colorScheme="red" leftIcon={<FiLogOut size={20}/>} onClick={() => signOut()} mr={isWideVersion ? '' : "6"}>
          Sair
        </Button>
      </Flex>
      </Stack>
    </Box>
  );
}
