import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // BrowserRoute should wrap anything that we want to be routable.
      // Any subcomponent of BrowserRoute, here Blog, will get access to routing functionality.
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
