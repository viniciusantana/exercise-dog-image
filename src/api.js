import React from 'react';

class Api extends React.Component {
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
    const imgUrl = requestObject.message;
    if(imgUrl.includes('terrier')) {
      this.setState({
        loading: false,
      })
      alert('TERRIER - Clique em ADD-DOG e tente novamente')
    }else {
      this.setState((prevState) => ({
        dogObject: [...prevState.dogObject ,imgUrl],
        loading: false,
      }));
      // corta o início da url e o final ** Magic Numbers
      alert(imgUrl.slice(30, imgUrl.indexOf('/', 30) - imgUrl.length));
    }
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

export default Api;
