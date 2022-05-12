import React, { Component } from 'react';
import './App.css';
import { Form } from './Components'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      question: "",
      passage: "",

      styleHeading: {
          color: "#fff",
          textAlign: "center",
      },
      styleInput: {
          height: "40px",
          padding: "0px 0px 0px 10px",
      },
      styleLabel: {
          padding: "0px 0px 0px 0px",
      },
      styleHr: {
          background: "transparent",
          color: "transparent",
          margin: "0",
          borderStyle: "none",
          height: ".5vw",
      },
    }

    this.computePressed = this.computePressed.bind(this);

    this.setQuestion = this.setQuestion.bind(this);
    this.setPassage = this.setPassage.bind(this);

  }

  computePressed = event => {
    event.preventDefault();

  };

  setPassage(data) {
    this.setState({
        passage: data,
    })
  }

  setQuestion(data) {
    this.setState({
        question: data,
    })
  }



  render() {
    return (
      <div>
        <header className="App-header">
        Bangla Question Anserwing
        </header>
  
        <Form>
          <label style={this.state.styleLabel}>
            Enter the Question
          </label>
          <hr style={this.state.styleHr}></hr>
          <input onChange={(e) => { this.setQuestion(e.target.value) }} type="text" placeholder="Question" />
  
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <label style={this.state.styleLabel}>
            Enter the Context
          </label>
          <hr style={this.state.styleHr}></hr>
          <input onChange={(e) => { this.setPassage(e.target.value) }} type="text" placeholder="Context" />


          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <input type="submit" value="Compute" />
        </Form>
  
      </div>
    );
  }
  
}

export default App;
