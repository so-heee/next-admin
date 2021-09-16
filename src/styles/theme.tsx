import * as colors from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: colors.blue[700],
    },
    secondary: {
      main: colors.blueGrey[800],
    },
  },
})

export default theme
