import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const cleanState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};
// clean state to use when saving a new card

const initialState = {
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
};
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  validateTrunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo && !hasTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  onSaveButtonClick = () => {
    const newCard = { ...this.state };
    // get values of new card using state
    delete newCard.deck;
    // delete old array from copy
    this.validateTrunfo();
    // set hasTrunfo true if newCard is trunfo
    this.setState(cleanState);
    // reset values from all inputs (cleaning only the right state values)
    this.setState(({ deck }) => ({ deck: [...deck, newCard] }));
    // set state 'deck' array adding the new card to end of the array
  }

  onInputChange = ({ target }) => {
    // check if input is a checkbox and return the right value
    const rightValue = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.name]: rightValue }, this.validateInputs);
    // link state values to inputs accordingly &&
    // validate inputs on every change
  }

  deleteCard = (cardToRemove) => {
    // receive the card to remove
    const { deck } = this.state;
    // get deck array from state
    if (cardToRemove.cardTrunfo) { this.setState({ hasTrunfo: false }); }
    // check if the card being removed is a trunfo, if so set hasTrunfo to false
    const cardRemoved = deck.filter((card) => card.cardName !== cardToRemove.cardName
    && card.cardDescription !== cardToRemove.cardDescription);
    // generate a new deck array filtering the remove card by matching name and description
    this.setState({ deck: [...cardRemoved] });
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
  } // needs refactoring :P
  // set isSaveButtonDisabled according to valid input values

  render() {
    const { state, state: { deck }, onInputChange, onSaveButtonClick } = this;
    // destructuring state (to pass as props), deck array from state (to use on preview) & functions used
    return (
      <>
        <main>
          <h1>Tryunfo</h1>
          <Form
            { ...state }
            // passing props from state using spread
            onSaveButtonClick={ onSaveButtonClick }
            onInputChange={ onInputChange }
          />
          <Card
            { ...state }
            cardPreview
            // prop to change CSS class
          />
        </main>
        {
          deck.map((card) => {
            const id = Math.round(Math.random() * 100);
            // generate a id to use as key
            return (
              <section
                key={ `${card.cardName}${id}` }
                className="card-section"
              >
                <Card { ...card } />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deleteCard(card) }
                  // onClick pass target to deleteCard
                >
                  Delete Card
                </button>
              </section>
            );
          })
        }
      </>
    );
  }
}

export default App;
