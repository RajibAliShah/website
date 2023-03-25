"use client"
import React from 'react'
import { Box, Button, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
export default function Section2() {
  return (
   <Box>
        <Container maxW={"1200"} bg="blue.50" p="10">
       <Flex flexDirection={{base: 'column', md:"row"}}>
        <Box >
        <Heading>Try our free components</Heading>
        <Text>You don't have to buy a pig in a poke - 
            you can experience our free community components 
            before making a purchase decision</Text>
            </Box>
            <Box >
            <Button colorScheme={"blue"}>View Components</Button>
            </Box>
            </Flex>
            
        </Container>
   </Box>
  )
}
