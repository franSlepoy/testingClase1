import React from 'react';
import { Box, Typography } from '@mui/material';

import './App.css';
import LoginForm from './pages/login/LoginForm';

function App() {
  return (
    <Box
      className='App'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Typography variant='h2' mb='20px' textAlign='center'>
        Ejercicio - Testing
      </Typography>
      <LoginForm /> 
    </Box>
  );
}

export default App;