"use client"
import { ChakraBaseProvider, } from "@chakra-ui/react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraBaseProvider>
        {children}
        </ChakraBaseProvider>
        </body>
    </html>
  )
}
