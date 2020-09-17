import React from 'react';
import PropTypes from 'prop-types';

export default class CoreForm extends React.Component {
  render() {
    // @todo create form element class
    const elementsHtml = this.props.elements.map((v, k) => {
      // @todo account for select, etc.
      return (
        <div key={k} className="form-group">
          <label htmlFor={v.name}>{v.name}</label>
          <input type={v.type} id={v.name} name={v.name} />
        </div>
      )
    });
    // @todo form action, method
    return (
      <form className="user-login">
        {elementsHtml}
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

CoreForm.propTypes = {
  elements: PropTypes.array
}