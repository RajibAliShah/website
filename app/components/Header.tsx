"use client"
import { MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { ChakraBaseProvider, Hide, Show } from "@chakra-ui/react"

import {  
Box, 
  Image, 
  List, 
  ListItem, 
  HStack, 
  Button, 
  Flex,
  Link
} from "@chakra-ui/react" 
import Burger from './Burger';

export default function Header() {
  return (
<Box as="header" position={"sticky"} top="0" zIndex={"1"}>
        {/* //left area  */}
        <Box> 
        <Flex justifyContent="space-around" alignItems="center" bg="white" py="5">   
          <HStack>
        <Image src="/images/logo.webp" alt="logo" />
        
        <List>
        <Hide below='md'>
          <HStack align={"center"} spacing="5" ml="40px" fontWeight={"bold"}>
         
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>        
         
          </HStack>
          </Hide>
        </List>
        <HStack spacing={"10"} pl="10">
      
        </HStack>
        </HStack>
        {/* right are side */}
        <HStack >
        <SearchIcon pr="15" w="25" h="25"/>
        <MoonIcon pr="15" w="25" h="25"/>
        {/* <Show below='md' >
        
        </Show> */}
        <Show below='md'>   
        <Burger/>
        </Show>
        <Link href='https://www.piaic.org/' target={"_blank"}>
        <Button colorScheme='teal' variant='outline'> Go to PIAIC </Button>
        </Link>
        </HStack>
        </Flex>
        </Box>
      </Box>
  )
}
