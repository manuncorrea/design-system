import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space
} from '@manuncorrea/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      with: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radii,
      space,
    },
  })
