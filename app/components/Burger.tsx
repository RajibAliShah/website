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
  } from '@chakra-ui/react'
import NavMenu from './NavMenu'

export default function Burger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          //finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
        <DrawerHeader>Panaverse Dao</DrawerHeader>
  
            <DrawerBody>
              {/* <Input placeholder='Type here...' /> */}
              <NavMenu/>
            </DrawerBody>
  
            <DrawerFooter>
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
 