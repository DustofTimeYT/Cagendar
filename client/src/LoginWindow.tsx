import * as React from 'react';
import "./LoginWindow.css"
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import PaperForm from './components/PaperForm';
import RootContainer from './components/RootContainer';
import AuthField from './components/AuthField';

const SignInForm: React.FC = () => {
  return (
    <>
      <PaperForm elevation={5}>
        <h2>Вход</h2>
        <Box sx={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <AuthField fullWidth label="Эл. почта" variant="filled" />
          <AuthField fullWidth label="Пароль" variant="filled" />
        </Box>
        <Box sx={{ borderTop: '2px solid', borderColor: 'secondary.dark', margin: "10px", padding: "20px" }}>
          <Button sx={{ color: 'secondary.main', fontSize: '1rem'}}>
            Зарегистрироваться
          </Button>
        </Box>
      </PaperForm>
    </>
  )
}

const SignUpForm: React.FC = () => {
  return (
    <>
      <PaperForm elevation={5}>
        <h2>Регистрация</h2>
        <Box sx={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <AuthField fullWidth label="Имя пользователя" variant="filled" />
          <AuthField fullWidth label="Эл. почта" variant="filled" />
          <AuthField fullWidth label="Пароль" variant="filled" />
        </Box>
        <Box sx={{ borderTop: '2px solid', borderColor: 'secondary.dark', margin: "10px", padding: "20px" }}>
          <Button sx={{ color: 'secondary.main', fontSize: '1rem'}}>
            Войти
          </Button>
        </Box>
      </PaperForm>
    </>
  )
}


const LoginWindow: React.FC = () => {
    return (
      <>
        <RootContainer>
          <SignInForm/>
        </RootContainer>
      </>
  );
};

export default LoginWindow;