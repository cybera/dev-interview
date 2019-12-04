import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'

const GreenTheme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: "white",
    }
  },
});

export default GreenTheme;
