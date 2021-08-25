import React, { useState, useEffect } from 'react';
import MoviesOverview from './views/MoviesOverview';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <MoviesOverview />
    </div>
  );
}

export default App;
