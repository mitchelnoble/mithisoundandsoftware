import React from 'react';
import Player from '../components/Player';
import Playlists from '../components/Playlists';
import Description from '../components/Description';
import Contact from '../components/Contact'
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
        <ThemeProvider theme={theme}>
      <h1 id='headline'>M i t h i <span id='pronounce'>[mee-thē]:</span> i d e a l</h1>
      <h3 id='headline-description'>music for your content</h3>
      <div id='button'>
      <Button
        variant='contained'
          href=''
          size='large'
          color='primary'
      >Let's Talk Music</Button>
      </div>
      {/* <div id="sound-gradient-top"></div> */}
      <Description />
      {/* <div id="sound-gradient-bottom"></div> */}
      <div id='player-container'>
      {Playlists.map((e) => {
        return (
          <Player
          playlist={e.playlist}
          key={e.id}
          />
          )
        })
      }
      </div>
      <Contact />
      </ThemeProvider>
    </div>
  );
};

export default Sound;