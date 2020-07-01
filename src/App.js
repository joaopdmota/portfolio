import React from 'react';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Experience from './components/Experience';
import './assets/fonts/fonts.css';

const App = () => {
  return (
    <div className="App">
      <Welcome />
      <Profile />
      <Experience />
    </div>
  );
}

export default App;
