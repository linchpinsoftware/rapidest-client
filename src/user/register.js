import React from 'react';

export default class UserRegister extends React.Component {
  render() {
    const elements = [
      { name: "email", type: "email" },
      { name: "password", type: "password" }
    ];
    return <CoreForm elements={elements} />;  
}