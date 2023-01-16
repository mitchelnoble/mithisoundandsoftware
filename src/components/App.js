import React from 'react';
import Nav from './Nav.js';
import Player from './Player.js';

export const App = () => {
  return (
    <>
      <Nav />
      <h1>Music for your content that fits just right</h1>
      {/* Should be the 3rd component to appear */}
      <Player />
      <h2></h2>
    </>
  )
}


export default App;