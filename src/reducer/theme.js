import { DARK_THEME, LIGHT_THEME } from '../action/theme'
import { DarkTheme, LightTheme } from '../config/theme'

const initialState = {
  type: DARK_THEME,
  value: DarkTheme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        ...state,
        type: action.type,
        value: action.value
      }
    case LIGHT_THEME:
      return {
        ...state,
        type: action.type,
        value: action.value
      }
    default: return state
  }
}