import React, { Fragment } from "react";
import { Search } from './Search/index';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1>What's the weather like? <br/> find out here</h1>
      <Search />
    </React.Fragment>
    
  );
}

export default App;
