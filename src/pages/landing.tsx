import {
  Box,
  Link,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
// import {  } from 'react'

export default function Landing_page() {
  return (
    <Box
      as="section"
      bg="white"
      boxSize='full'
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
      <Image src="https://github.com/BRL4528/site_concentual/assets/50926585/2c10c851-af45-43cf-8c48-22bb572a11b6" alt="home" w="150" h="20" ml="20"/>
        
        <Box>
        <Link mr="6" href="https://platform.senior.com.br/login/?redirectTo=https%3A%2F%2Fplatform.senior.com.br%2Fplataforma%2F">
        Acesso do Colaborador
        </Link>

        <Link mr="38" href="/">
        Acesso do Cooperado
        </Link>
        </Box>
      </Box>
      <Image src="https://github.com/BRL4528/site_concentual/assets/50926585/9377c31c-d072-4c04-a117-24227ebc95c9" alt="home" boxSize="full"/>
      <Image src="https://github.com/BRL4528/site_concentual/assets/50926585/8e62835b-dbed-45fc-8c78-8006ba3da52a" alt="home" boxSize="full"/>
      <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/412189a9-7cd1-49be-a6f7-ca6868eb5a27" alt="home" boxSize="full"/>
      <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/b402db99-f903-4332-b919-9d81af276ef7" alt="home" boxSize="full"/>
      <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/13ca0145-b054-4980-a5b2-c8c2a0d8a94f" alt="home" boxSize="full"/>
      <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/c544ee4d-081f-4023-bed9-7b64e05cab56" alt="home" boxSize="full"/>
      <Image src="https://github.com/Cooasgo/WEB-COOCAMPO/assets/105650591/04667ddd-32c6-4ff4-b0b4-8e26ea782812" alt="home" boxSize="full"/>
     
      
   
    </Box>
  );
}
