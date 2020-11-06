import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import 'normalize.css'
// import '../styles/globalstyles.scss'
import '../styles/wp-styles/styles.scss'
import { CSSReset } from '@chakra-ui/core'

export const Layout = ({ children }) => {
  return (
    <div>
      <CSSReset />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}