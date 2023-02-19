import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Player.css'
import { Card, Paper } from '@mui/material';


const Player = (props) => {
  return (
    <div id='player'>
      <Card height='5em'>
        <Paper elevation={8}>
            <ReactPlayer
              url={ props.playlist }
              className="soundcloud-react-player"
              width="100%"
            />
        </Paper>
      </Card>
    </div>
  );
};

export default Player;