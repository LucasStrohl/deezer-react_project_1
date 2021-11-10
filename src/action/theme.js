import { DarkTheme, LightTheme } from '../config/theme'
export const DARK_THEME = 'darkTheme'
export const LIGHT_THEME = 'lightTheme'


export const darkTheme = () => ({
  type: DARK_THEME,
  value: DarkTheme
})

export const lightTheme = () => ({
  type: LIGHT_THEME,
  value: LightTheme
})