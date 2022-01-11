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
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};
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

  onSaveButtonClick = () => {
    const newCard = { ...this.state };
    delete newCard.deck;
    this.setState(cleanState);
    this.setState(({ deck }) => ({ deck: [...deck, newCard] }), console.log(this.deck));
  }

  onInputChange = ({ target }) => {
    const rightValue = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [target.name]: rightValue }, this.validateInputs);
    // validate on every change
  }

  deleteCard = (cardToRemove) => {
    const { deck } = this.state;
    if (cardToRemove.cardTrunfo) { this.setState({ hasTrunfo: false }); }
    const cardRemoved = deck.filter((card) => card.cardName !== cardToRemove.cardName
    && card.cardDescription !== cardToRemove.cardDescription);
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
  }

  render() {
    const { state, state: { deck }, onInputChange, onSaveButtonClick } = this;
    return (
      <>
        <main>
          <h1>Tryunfo</h1>
          <Form
            { ...state }
            onSaveButtonClick={ onSaveButtonClick }
            onInputChange={ onInputChange }
          />
          <Card
            { ...state }
            cardPreview
          />
        </main>
        {
          deck.map((card) => {
            const id = Math.round(Math.random() * 100);
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
