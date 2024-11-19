import { styled, TextField } from "@mui/material";

const AuthField = styled(TextField)(({ theme }) => ({
  marginTop: '10px',
  marginBottom: '10px',
  
  '& label.Mui-focused': {
    color: theme.palette.secondary.light,
  },

  '.MuiInputBase-root': {
    '&:before': {
      borderColor: theme.palette.secondary.dark,
    },
    '&:after': {
      borderColor: theme.palette.secondary.light,
    },
    '&:hover': {
      borderColor: theme.palette.secondary.light,
    },
    color: theme.palette.secondary.main,
  },

  '.MuiInputLabel-filled': {
    
  },

  '.MuiInputLabel-root': {
    color: theme.palette.secondary.dark,
  },
}));

export default AuthField