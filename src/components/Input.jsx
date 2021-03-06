import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      value,
      type,
      onInputChange,
      inputTitle,
      dataId,
      minValue,
      maxValue,
    } = this.props;

    return (
      <label htmlFor={ dataId }>
        <h3 className="input-title">{inputTitle}</h3>
        <input
          name={ name }
          value={ value }
          type={ type }
          onChange={ onInputChange }
          id={ dataId }
          data-testid={ dataId }
          min={ minValue }
          max={ maxValue }
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
  inputTitle: PropTypes.string,
  dataId: PropTypes.string,
  minValue: PropTypes.string,
  maxValue: PropTypes.string,
}.isRequired;

export default Input;
