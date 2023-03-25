"use client"
import React from 'react'
import {StarIcon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { RiMoonFoggyLine } from "@react-icons/all-files/ri/RiMoonFoggyLine";
import { FaPaintBrush } from "@react-icons/all-files/fa/FaPaintBrush";
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

import {
    Text,
    Heading,
    Box,
    Center,
    HStack,
    Container,
    SimpleGrid,
    Flex
} from "@chakra-ui/react"

export default function Section() {
  return (
    // main box start
    <Box>
        <Box ml="5" textAlign={{base: "left", md:"center"}}>
        <Text color={"#3182ce"} as="b" >Features</Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text mt="5" textAlign={{base: "left", md:"center"}} fontSize={"20px"}>A bundle of 220+ ready-to-use,
             responsive and accessible components with clever 
             structured sourcecode files.</Text>
    </Box>
   <Container maxW={"1200"}>
    {/* 6 features */}
<Box mt="5">  
    <Flex 
    //h="100vh"
    py={[0, 10, 20]}
    direction={{base: "column-reverse", md:"row"}}>
    {/* feature 1     */}   
    <Box>
    <HStack>
    
    <BsStar size={"50"} color={"#3182ce"}/>
    <Box>
    <Heading fontSize={"18"}>220+ Components</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feature 1 end */}
   
   {/* feature 2     */}
   <Box >
    <HStack>
        <BiRocket size={"50"} color={"#3182ce"}/>
    
    <Box>
    <Heading fontSize={"18"}>Themable</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feature 2 end */}
   {/* feauture 3 */}
   <Box>
    <HStack>
    <RiMoonFoggyLine size={"50"} color={"#3182ce"}/>
    <Box>
    <Heading fontSize={"18"}>Light & Dark</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feauture 3 end */}
   </Flex>
   <Box >
    <Flex 
    //h="100vh"
     py={[0, 10, 20]}
    direction={{base: "column-reverse", md:"row"}}>
    {/* feature 4     */}   
    <Box>
    <HStack>
    <FaPaintBrush size={"50"} color={"#3182ce"}/>
    <Box>
    <Heading fontSize={"18"}>Themable</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feature 4 end */}
   
   {/* feature 5     */}
   <Box>
    <HStack>
    <BiCodeAlt size={"50"} color={"#3182ce"}/>
     <Box>
    <Heading fontSize={"18"}>Developer Friendly</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feature 5 end */}
   {/* feauture 6 */}
   <Box>
    <HStack>
    <AiFillStar size={"50"} color={"#3182ce"}/>
        <Box>
    <Heading fontSize={"18"}>Accessible</Heading>
    <Text>All our components come with a light and dark color mode by default.</Text> 
    </Box> 
   </HStack>
   </Box>
   {/* feauture 6 end */}
   </Flex>
   {/* all features end */}
   </Box>

   {/* feature 6 end */}
   </Box>
   </Container>     
   </Box> 
//    main box end
  )
}
