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
    this.setState({ [target.name]: rightValue });
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
