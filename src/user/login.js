import React from 'react';
import CoreForm from '../core/form.js';

// @todo create and extend base form

export default class UserLogin extends React.Component {
  render() {
    const elements = [
      { name: "email", type: "email" },
      { name: "password", type: "password" }
    ];
    return <CoreForm elements={elements} />;
  }
}