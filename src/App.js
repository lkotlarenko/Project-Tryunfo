import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
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
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;
    const max = 90;
    const sum = 210;
    if (
      name !== ''
      && description !== ''
      && image !== ''
      && rare !== ''
      && attr1 !== ''
      && attr2 !== ''
      && attr3 !== ''
      && (Number(attr1) >= 0 && Number(attr1) <= max)
      && (Number(attr2) >= 0 && Number(attr2) <= max)
      && (Number(attr3) >= 0 && Number(attr3) <= max)
      && Number(attr1) + Number(attr2) + Number(attr3) <= sum
    ) return this.setState({ isSaveButtonDisabled: false });
    this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const { state, onInputChange } = this;
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          { ...state }
          onInputChange={ onInputChange }
        />
        <Card />
      </main>
    );
  }
}

export default App;
