import React from 'react';
import { GridProvider } from './GridContext';
import Grid from './Grid';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <Grid />
      </div>
    </GridProvider>
  );
}

export default App;