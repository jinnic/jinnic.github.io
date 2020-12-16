//https://www.gatsbyjs.com/tutorial/part-three/

import Typography from "typography"
// import injectFonts from 'typography-inject-fonts'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  headerFontFamily: ['Lora', 'serif'],
  bodyFontFamily: ['Karla', 'Arial', 'sans-serif']

})

typography.injectStyles()
// injectFonts(typography)

export const { scale, rhythm, options } = typography
export default typography