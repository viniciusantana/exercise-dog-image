import React from 'react';

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      dogObject: [],
      loading: true,
    };
    this.dogApi = this.dogApi.bind(this);
  }

  componentDidMount() {
    this.dogApi();
  }

  async dogApi() {
    this.setState({
      loading: true,
    });

    const endpoint = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(endpoint);
    const requestObject = await request.json();
    const imgUrl = requestObject.message;
    // corta o início da url e o final ** Magic Numbers
    // const breed = imgUrl.slice(30, imgUrl.indexOf('/', 30) - imgUrl.length);

    if (imgUrl.includes('terrier')) {
      this.setState({
        loading: false,
      });
      alert('TERRIER - Clique em ADD-DOG e tente novamente');
    } else {
      this.setState((prevState) => ({
        dogObject: [...prevState.dogObject, imgUrl],
        loading: false,
      }));
      // alert(breed);
    }
  }

  render() {
    const { dogObject, loading } = this.state;
    return (
      <section>
        <button type="button" onClick={ this.dogApi }>ADD-DOG</button>
        <section>
          { dogObject.map((imgUrl, index) => (
            <section key={ index } className="doggo">
              <h2>{ imgUrl.slice(30, imgUrl.indexOf('/', 30) - imgUrl.length) }</h2>
              <img src={ imgUrl } alt="DogImage" />
            </section>
          )) }
          {loading ? 'Loading...' : ''}
        </section>
      </section>
    );
  }
}

export default Api;
