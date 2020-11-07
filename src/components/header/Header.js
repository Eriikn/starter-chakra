/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { Menu, SiteBranding } from './index'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { SearchForm, SearchModal } from '../search'
import {
  Box,
  Flex,
  Heading,
  Input,
  Icon,
  useTheme,
  Button,
  jsx,
} from '@chakra-ui/core'
// import { ColorSwitch } from '../index'

export const Header = () => {
  const { search, menuName } = useThemeOptions()
  console.log('theme', useTheme())

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings

  return (
    // <header className="header">
    //   <div className="container">
    //     {search && <SearchForm />}

    //     <SiteBranding title={title} />

    //     <Menu menuName={menuName} />
    //   </div>
    // </header>
    <Box className="header" as="header" py={10} sx={{ bg: 'gray.700' }}>
      <Flex maxWidth={1200} ml="auto" mr="auto" justifyContent="space-between">
        {search && <SearchModal />}
        <SiteBranding title={title} />
        <Button colorScheme="teal" bg="tomato">
          Button
        </Button>
      </Flex>
      {/* <ColorSwitch
        sx={{
          position: `absolute`,
          right: [`6%`, `6%`, `2%`],
          top: [15, 15, 25],
          '.headroom--pinned &': {
            top: [10, 10, 15],
          },
        }}
      /> */}
    </Box>
  )
}
