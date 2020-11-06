/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import {
  useDisclosure,
  Drawer,
  Flex,
  Box,
  Icon,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/core'
import { SearchForm } from './SearchForm'

export const SearchModal = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return (
    <>
      <Button rightIcon="search" variant="unstyled" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="background" p={4}>
          <DrawerBody>
            <DrawerCloseButton />
            <SearchForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
