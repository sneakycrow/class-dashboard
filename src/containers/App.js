import React, { Component } from 'react';
import Login from 'Components/Forms/Login.js';
import { injectGlobal } from 'emotion';
import pallette from 'assets/pallette';

injectGlobal`
  * {
    font-size: 16px;
    font-family: 'Fira Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Fira+Sans');
  }
  body {
    background-color: ${pallette.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { value, name } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state); // eslint-disable-line no-console
  }

  render() {
    return (
      <Login
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        values={this.state}
      />
    );
  }
}

export default App;
