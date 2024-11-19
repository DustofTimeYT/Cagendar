import {alpha, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#3C303E',
      contrastText: alpha('#e1d0b4', 0.9)
    },

    secondary: {
      main: alpha('#e1d0b4', 0.9),
      contrastText: alpha('#3C303E', 0.9)
    }
  }
});

export default Theme