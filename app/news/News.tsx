"use client"
import { Box, Button, Container, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function News() {
  return (
<Box>
<Container bg={"gray.50"} maxW="100%" py="14">
    <Flex justifyContent={"space-around"}>
    <Box>
        <Heading fontWeight={"semibold"}>Join our Newletter</Heading>
        <Text>Dont miss any more news and subscribe to our newsletter today.</Text>
    </Box>
    <Box>
        <HStack>
            <Input placeholder='Enter you email'></Input>
            <Button width={"150"}>Subscribe</Button>
        </HStack>
    </Box>
    </Flex>
</Container>
</Box>
  )
}
