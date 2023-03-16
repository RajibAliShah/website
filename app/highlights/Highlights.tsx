"use client"
import { Box, Container, Heading, Text, Button, Flex, Center } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IoIosSpeedometer } from "@react-icons/all-files/io/IoIosSpeedometer";
import { FaCommentDollar } from "@react-icons/all-files/fa/FaCommentDollar";
import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings";
import { MdHelpOutline } from "@react-icons/all-files/Md/MdHelpOutline";


export default function Highlights() {
  return (
    <Box>
    <Box textAlign={"center"}>
      <Text color={"#3182ce"} as="b">
      Highlights
      </Text>
      <Heading mt="5" fontWeight={"semibold"}>Why Us?</Heading>
      <Text mt="3" ml={"200"} fontSize={"20px"}>Because these beautiful and responsive React components
         will help you realize your next idea in no time.</Text>
    </Box>
    <Container maxW={"1200"}>
      <Flex gap={"5"}>
    <Card align='center'>
  <CardHeader>
    <Center color={"blue.500"}>
  <IoIosSpeedometer size={50}/>
  </Center>
    <Heading size='md'> Speed up workflow</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"center"}>
      Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
  <Center color={"blue.500"}>
  <FaCommentDollar size={50}/>
  </Center>
    <Heading size='md'> Save good money</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"center"}>
      Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
  <Center color={"blue.500"}>
  <IoMdSettings size={50}/>
  </Center>
    <Heading size='md'> Easily customizable</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"center"}>
      Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center'>
  <CardHeader>
  <Center color={"blue.500"}>
  <MdHelpOutline size={50}/>
  </Center>
    <Heading size='md'> Support Us</Heading>
  </CardHeader>
  <CardBody>
    <Text align={"center"}>
      Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
</Flex>
    </Container>
    </Box>
  )
}
