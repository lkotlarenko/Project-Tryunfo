import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      // store deck of cards
    };
  }

  onInputChange = ({ target }) => {
    const rightValue = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.name]: rightValue }, this.validateInputs);
    // validate on every change
  }

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const max = 90;
    const sum = 210;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && cardRare !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= max)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= max)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= max)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sum
    ) return this.setState({ isSaveButtonDisabled: false });
    this.setState({ isSaveButtonDisabled: true });
  }

  onSaveButtonClick = () => {
    const newCard = { ...this.state };
    delete newCard.deck;
    this.setState(({ deck }) => ({ deck: [...deck, newCard] }));
  }

  render() {
    const { state, state: { deck }, onInputChange, onSaveButtonClick } = this;
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          { ...state }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ onInputChange }
        />
        { deck
          .map((card) => <Card key={ card.cardName } { ...card } />)}
      </main>
    );
  }
}

export default App;
