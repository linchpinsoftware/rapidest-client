import React from 'react';
import PropTypes from 'prop-types';
//import CoreApi from './api.js';
import config from '../config.js';

export default class CoreForm extends React.Component {
  // @todo get URI
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }
  handleChange(event) {
    // @todo account for other types
    this.setState({[event.target.name]: event.target.value});
  }
  handleClick(event) {
    // @todo validate data
    event.preventDefault();
    //CoreApi.post('user', this.state);
    // @todo URI
    console.log(this.state);
    fetch(config.api.url + '/user', {
      body: JSON.stringify(this.state),
      method: 'post'
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
  render() {
    // @todo create form element class
    const elementsHtml = this.props.elements.map((v, k) => {
      // @todo account for select, etc.
      return (
        <div key={k} className="form-group">
          <label htmlFor={v.name}>{v.name}</label>
          <input type={v.type} name={v.name} className="form-control" required={v.required} onChange={this.handleChange} />
        </div>
      )
    });
    // @todo form action, method
    return (
      <form className="user-login">
        {elementsHtml}
        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

CoreForm.propTypes = {
  elements: PropTypes.array
}