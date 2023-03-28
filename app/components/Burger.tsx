"use client"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Link,
    Box,
  } from '@chakra-ui/react'

import React from 'react'


export default function Burger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    
    
    return (
     <div>
     <>
      {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup> */}
      
      <Button colorScheme='blue' onClick={onOpen}>
        Menu
      </Button>
      <Drawer 
      placement="right" 
      onClose={onClose} 
      isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
         <Box fontWeight={"bold"} mt="5">
          <p><Link  href='./' >Home</Link></p>
          <p></p>
          <p><Link  href='./' >About</Link></p>
          <p></p>
          <p><Link  href='./' >Contact</Link></p>
          </Box>

         
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    </div>
  )
}
