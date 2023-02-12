import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Player.css'
import { Paper } from '@mui/material';


const Player = (props) => {
  return (
    <div id='player'>
          <Paper>
            <ReactPlayer
              url={ props.playlist }
              className="soundcloud-react-player"
              width="100%"
            />
          </Paper>
    </div>
  );
};

export default Player;