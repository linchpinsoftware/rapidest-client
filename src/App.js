import React from 'react';
import './App.css';
import config from './config.js';
import UserLogin from './user/login.js';

// @todo constants

// @todo load user and access token from cookie

function App() {
  //console.log(config);
  
  fetch(config.api.url + '/user')
    .then(response => response.json())
    .then(data => console.log(data));
  return (
    <div className="App">
      <h1>Rapidest</h1>
      <div className="main">
        <UserLogin />
      </div>
    </div>
  );
}

export default App;
