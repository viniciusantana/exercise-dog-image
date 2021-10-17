import React from 'react';

class Componentes extends React.Component {
  constructor() {
    super();
    
    this.state = {
      dogObject: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.dogApi();
  }
  
  dogApi = async () => {
    this.setState({
      loading: true
    })
    const url = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(url);
    const requestObject = await request.json();
    this.setState((prevState) => ({
      dogObject: [...prevState.dogObject ,requestObject.message],
      loading: false,
    }))
  }

  render() {
    const { dogObject, loading } = this.state;
    return (
      <section>
        <button type='button' onClick={ this.dogApi }>ADD-DOG</button>
        <section>
          { dogObject.map((imgUrl) => (<img src={imgUrl} />)) }
          {loading? 'Loading...': ''}
        </section>
      </section>
    );
  }
}

export default Componentes;
