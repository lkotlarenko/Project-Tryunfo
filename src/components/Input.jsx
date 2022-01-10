import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, value, type, onInputChange } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        <h3 className="input-title">{name}</h3>
        <input
          name={ name }
          value={ value }
          type={ type }
          onChange={ onInputChange }
          id={ `${name}-input` }
          data-test-id={ `${name}-input` }
        />
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
