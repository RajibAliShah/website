"use client"
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Hide } from '@chakra-ui/react'
import { 
    Box, Heading, HStack, Text, Image, Button, Link
 } from '@chakra-ui/react'
export default function Topcontainer() {
  return (
<Box  backgroundImage={"/images/background2.webp"} backgroundSize="contain" h="500" my="10">
{/* left */} 
<HStack >
    <Box w={{base: "100%", lg:"50%"}} color="white" pl={{base: "10", lg: "44"}}>
    <Heading fontSize={"60"}>
        Build you next idea even faster
    </Heading>
    <Text >One Year Panaverse DAO Earn as you Learn Program.
         Consolidating Web 3.0, Metaverse, Artificial Intelligence
          (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
        <Button mr="5" mt="5" colorScheme={"blue"}>Buy Now</Button>
        <Button mt="5" colorScheme={"blue"} variant="outline">View Components</Button>
       
       <HStack>
        <AvatarGroup size='md' max={3} mt="5">
  <Avatar name='Sir Zia Khan' src='/images/sirzia.jpg' />
  <Avatar name='Shahzad Hassan Arain' src='/images/shahzad.jpg' />
  <Avatar name='Rajib Ali Shah' src='/images/rajib.jpg' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
<Text  mt="10">Created By </Text>
<Text as='b' mt="10"> 
<Link
color={"blue.500"} 
target={'_blank'} 
href='https://www.linkedin.com/in/rajib-ali-shah-61869087/'>Rajin Ali Shah</Link></Text>
</HStack>

</Box>
<Box>
<Hide below='lg'>
<Image src="/images/banner.png" pt="7" />
</Hide>
</Box>
</HStack>
</Box>

  )
}
