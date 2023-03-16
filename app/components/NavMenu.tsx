"use client"
import { Hide, HStack, List, ListItem, Stack, useColorMode } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

export default function NavMenu ({horizontal=true}) {
    const { colorMode } = useColorMode ();
  return (
    <>
    <List
    fontWeight={"bold"}
    color={colorMode == "light"? "#4A5568":"white"}
    >
    <Hide below='md'>
    <HStack align={"center"} spacing="5" ml="40px" fontWeight={"bold"}></HStack>
    <Stack
    direction={{base:"column", md:"row"}}
    align={{base:"left", md:"center"}}
    >
    <Link href={"/"}>Home</Link>
    <Link href={"/about"}>About</Link>
    <ListItem>Contact</ListItem>
    </Stack>
    </Hide>
    </List>
    </>
  );
}
