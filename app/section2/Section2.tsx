"use client"
import React from 'react'
import { Box, Button, Container, Heading, HStack, Text } from '@chakra-ui/react'
export default function Section2() {
  return (
   <Box>
        <Container maxW={"1200"} bg="blue.50" p="10">
        <HStack>
        <Box flex={"3"}>
        <Heading>Try our free components</Heading>
        <Text>You don't have to buy a pig in a poke - 
            you can experience our free community components 
            before making a purchase decision</Text>
            </Box>
            <Box flex={1}>
            <Button colorScheme={"blue"}>View Components</Button>
            </Box>
            </HStack>
            
        </Container>
   </Box>
  )
}
