import React from 'react';
import Nav from './Nav.js';
import Sound from '../screens/Sound.js'
import '../styles/App.css'

export const App = () => {
  return (
    <div id='app'>
      <Nav />
      <Sound />
    </div>
  )
}


export default App;