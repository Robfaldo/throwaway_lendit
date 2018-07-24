import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { hello: "" };

    componentDidMount(){
        this.getHello();
    }

    getHello = () => {
        fetch('/api/hello')
            .then(res => res.json()).then(hello => this.setState({ hello }));
    }


  render() {
    return (
        <div>
            {this.state.hello}
        </div>

    );
  }
}

export default App;
