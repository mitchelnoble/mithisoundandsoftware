import React from 'react';
import Player from '../components/Player';
import { Button } from '@mui/material';
import '../styles/Sound.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: 'Fjalla One, Libre Baskerville',
  },
  palette: {
    primary: {
      // main: '#0971f1',
      // darker: '#053e85',
      main: '#000000',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const Sound = () => {
  return (
    <div id="sound">
      <h1 id='headline'>Mithi <span id='pronounce'>[mee-thē]:</span> ideal</h1>
      <h3 id='headline-description'>music for your content</h3>
      <div id='button'>
        <ThemeProvider theme={theme}>
      <Button
        variant='contained'
          href=''
          size='large'
          color='primary'
      >Let's Talk Music</Button>
      </ThemeProvider>
      </div>
      <Player />
    </div>
  );
};

export default Sound;