import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const trunfoInput = (
      <label htmlFor="trunfo-input">
        <h3 className="input-title">trunfo</h3>
        <input
          name="cardTrunfo"
          checked={ cardTrunfo }
          type="checkbox"
          onChange={ onInputChange }
          id="trunfo-input"
          data-testid="trunfo-input"
        />
      </label>
    );
    return (
      <form>
        <Input
          name="cardName"
          value={ cardName }
          type="text"
          onInputChange={ onInputChange }
          inputTitle="name"
          dataId="name-input"
        />
        <Input
          name="cardDescription"
          value={ cardDescription }
          type="textarea"
          onInputChange={ onInputChange }
          inputTitle="description"
          dataId="description-input"
        />
        <Input
          name="cardAttr1"
          value={ cardAttr1 }
          type="number"
          onInputChange={ onInputChange }
          inputTitle="attribute 1"
          dataId="attr1-input"
          minValue="1"
          maxValue="90"
        />
        <Input
          name="cardAttr2"
          value={ cardAttr2 }
          type="number"
          onInputChange={ onInputChange }
          inputTitle="attribute 2"
          dataId="attr2-input"
          minValue="1"
          maxValue="90"
        />
        <Input
          name="cardAttr3"
          value={ cardAttr3 }
          type="number"
          onInputChange={ onInputChange }
          inputTitle="attribute 3"
          dataId="attr3-input"
          minValue="1"
          maxValue="90"
        />
        <Input
          name="cardImage"
          value={ cardImage }
          type="text"
          onInputChange={ onInputChange }
          inputTitle="image url"
          dataId="image-input"
        />
        <label htmlFor="rare-input">
          <h3 className="input-title">rarity</h3>
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <h4>Voc?? j?? tem um Super Trunfo em seu baralho</h4>
          : trunfoInput }
        <button
          name="save"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick() }
          type="button"
          data-testid="save-button"
        >
          Save
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
