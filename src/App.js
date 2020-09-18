import React from 'react';
import './App.css';
import UserLogin from './user/login.js';
import UserRegister from './user/register.js';
//import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// @todo constants
// @todo react-bootstrap
// @todo load user and access token from cookie

function App() {
  return (
    <div className="App">
      <h1>Rapidest</h1>
      <div className="main">
        <Tabs defaultActiveKey="login">
          <Tab eventKey="login" title="Log in">
            <UserLogin />
          </Tab>
          <Tab eventKey="register" title="Register">
            <UserRegister />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
