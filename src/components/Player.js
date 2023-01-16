import React from 'react';
import ReactPlayer from 'react-player';
import playlists from './playlists';
import { Paper } from '@mui/material';


const Player = () => {
  return (
    <div>
          <Paper>
            <ReactPlayer
              url={ playlists.forGames }
              className="soundcloud-react-player"
              width="100%"
            />
          </Paper>
      <br />
      <Paper>
            <ReactPlayer
              url={ playlists.rebirth }
              className="soundcloud-react-player"
              width="100%"
            />
          </Paper>
    </div>
  );
};

export default Player;