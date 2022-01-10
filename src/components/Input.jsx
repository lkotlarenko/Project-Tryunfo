import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      value,
      type,
      onInputChange,
    } = this.props;
    return (
      <label>
        <h3>Hello world</h3>
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Input;
