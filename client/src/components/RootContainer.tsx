import { Container, styled } from "@mui/material";

const RootContainer = styled(Container)(({ theme }) =>({
  height: '100vh',
  width: '100vw',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
}));

export default RootContainer