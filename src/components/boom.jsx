import React, { Component } from 'react'
class Greeting extends Component {
  const [name, setName] = useState('John');
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}