import { alpha, Paper, styled } from "@mui/material";

const PaperForm = styled(Paper)(({ theme }) => ({
  margin: '100px',
  fontSize: '2rem',
  padding: theme.spacing(2,2,1),
  textAlign: 'center',
  borderRadius: 10,
  flexDirection: 'column',
  minWidth:'280px',
  maxWidth: '420px',
  maxHeight: '720px',
  backgroundColor: alpha(theme.palette.primary.light, 0.8),
  color: theme.palette.primary.contrastText,
}));

export default PaperForm