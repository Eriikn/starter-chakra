import { darken, lighten } from '@theme-ui/color'

const dark = '#082737'
const dark0 = lighten('#082737', 0.08)
const dark2 = darken('#082737', 0.04)
const dark3 = darken('#082737', 0.1)
const light = '#FBEED9'
const light2 = lighten('#FBEED9', 0.04)
const primary = 'tomato'
const secondary = '#4C959B'
const lightGrey = '#cfd8dc'
const grey = '#90a4ae'
const yellow = '#FCB458'
const purple = '#c725A3'
const accentDark = '#FCB458'
const accentLight = 'tomato'

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  yellow,
  purple,
  accent: accentDark,
  background: dark,
  bgInverse: dark,
  text: light,
  textInverse: light,
  white: 'white',
  black: 'black',
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: purple,
  headerColor: light,
  headerColorHover: accentDark,
  footerBg: dark3,
  footerColor: light,
  infoBg: dark3,
  cardBg: dark2,
  archiveTitleBg: secondary,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: 'white',
  highlightColor: accentDark,
  searchColor: primary,
  slideSidebarBg: dark,
  focusOutline: grey,
  nlInputBg: lighten(dark, 0.05),
  nlInputColor: light,
  nlButtonBg: secondary,
  nlButtonBgHover: darken(secondary, 0.05),
  nlButtonColor: light,
  gradientColor1: dark,
  gradientColor2: darken(dark, 0.08),

  modes: {
    light: {
      text: dark0,
      background: light,
      cardBg: light2,
      headerBg: dark,
      footerBg: dark,
      infoBg: darken(0.02, light),
      archiveTitleBg: grey,
      searchColor: grey,
      accent: accentLight,
      nlInputBg: light,
      nlInputColor: dark,
      nlButtonBg: primary,
      nlButtonBgHover: darken(0.1, primary),
      gradientColor1: lighten(0.2, dark),
      gradientColor2: dark,
    },
  },
}
