"use client"
import { Box, ChakraProvider, Highlight } from "@chakra-ui/react"
import React from "react"
import Header from "./components/Header"
import Topcontainer from "./Topcontainer/Topcontainer"
import Section from "./section/Section"
import Section2 from "./section2/Section2"
import Highlights from "./highlights/Highlights"
import News from "./news/News"
import Faq from "./faq/Faq"
import Footer from "./footer/Footer"


export default function Home() {
  return (
    <ChakraProvider>
    <>
    <Box>
 <Header />
<Topcontainer />  
 <Section />
 <Section2 />
 <Highlights/>
 <News/>
 <Faq />
 </Box>
 <Footer/>
  </>
  </ChakraProvider>
  )
}
