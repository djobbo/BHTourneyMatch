import React from 'react';
import Navbar from './components/Navbar'
import Set from './components/Set'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Set teamCount="2" playerCount="4" />
    </div>
  );
}

export default App;