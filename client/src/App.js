import React, { Fragment } from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Landing />
      </Fragment>
    </div>
  );
}

export default App;
