import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
import termsFrPath from './markdown/README.md'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(termsFrPath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default App;
