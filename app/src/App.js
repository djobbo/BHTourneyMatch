import React from 'react';
import SetContextProvider from './contexts/SetContext';
import Navbar from './components/Navbar'
import Set from './components/Set'

function App() {
  return (
    <div className="App">
        <SetContextProvider>
            <Navbar />
            <Set teamCount="2" playerCount="4" />
        </SetContextProvider>
    </div>
  );
}

export default App;