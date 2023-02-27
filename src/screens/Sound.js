import React from 'react';
import Player from '../components/Player';
import Playlists from '../components/Playlists';
import Description from '../components/Description';
import Contact from '../components/Contact'
import { Button, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

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
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
      long: 700,
      longer: 1000,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

const Sound = () => {
  return (
    <div id="sound">
      <ThemeProvider theme={theme}>
        <Slide in direction='down' timeout={theme.transitions.duration.long} easing={theme.transitions.easing.easeInOut}>
      <h1 id='headline'>M i t h i <span id='pronounce'>[mee-thē]:</span> i d e a l</h1>
        </Slide>
        <Slide in direction='right' timeout={theme.transitions.duration.long} easing={theme.transitions.easing.easeInOut}>
        <h3 id='headline-description' className='headline-description' variant='h4'>music for your content</h3>
        </Slide>
      <div id='button'>
      <Button
        variant='contained'
          href='#form-container'
          size='large'
          color='primary'
      >Let's Talk Music</Button>
      </div>
        <Description theme={theme} />
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