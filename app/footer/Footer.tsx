"use client"
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";

export default function Footer() {
  return (
 <Box>
    <Container maxW={"100%"} bg="blackAlpha.100" py="4">
        <Flex justifyContent={"space-around"} alignItems="center">
            <Text>© 2023 Panaverse. All rights reserved.</Text>
            
                <Box>
                <HStack>
                <FaGithubSquare size="25"/>
                <FaFacebookF size={"25"} />
                <FaDiscord size={"25"}/>
                </HStack>
                </Box>
            
        </Flex>
    </Container>
 </Box>
  )
}
