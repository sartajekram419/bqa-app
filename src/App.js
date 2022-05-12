import React, { Component } from 'react';
import './App.css';
import { Form , Div, Button } from './Components'
import fetch from "node-fetch";


//ENDPOINT = https://api-inference.huggingface.co/models/<sagorsarker/mbert-bengali-tydiqa-qa>
//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


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      model: null,

      question: "",
      passage: "",
      answer: "ssssssssssssssssssssssssssfsfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",

      shown: false,

      styleHeading: {
          color: "#fff",
          textAlign: "center",
      },
      styleInput: {
          height: "20px",
          padding: "0px 0px 0px 10px",
          background: "#EAEAF5",
          
          borderRadius: "5px 5px 5px 5px",
          border: "2px solid #EAEAF5"
      },
      styleInput1: {
        height: "100px",
        padding: "0px 0px 0px 10px",
        background: "#EAEAF5",
      
        borderRadius: "5px 5px 5px 5px",
        border: "2px solid #EAEAF5",
        justifyContent: "start",
        textAlignVertical: 'top',
        textAlign: 'top'
    },
      styleLabel: {
          padding: "0px 0px 0px 0px",
          font: '200px',
          textAlign: 'left'
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
    this.setShown = this.setShown.bind(this);
    this.setModel = this.setModel.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  computePressed = async event => {
    event.preventDefault();

    /*query(this.state.question, this.state.passage).then((response) => {
      this.setAnswer(JSON.stringify(response));
    });*/

    const response = await fetch(
      "https://api-inference.huggingface.co/models/sagorsarker/mbert-bengali-tydiqa-qa",
      {
          headers: { Authorization: `Bearer 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` },
          method: "POST",
          body: JSON.stringify({'question': this.state.question, 'context': this.state.passage}),
      }
  );
  const result = await response.json();
  this.setAnswer(JSON.stringify(result["answer"]));

    this.setShown();
  };

  /*query = async (data) => {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/sagorsarker/mbert-bengali-tydiqa-qa",
        {
            headers: { Authorization: `Bearer ${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}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
  };*/

  setModel(data) {
    this.setState({
        model: data,
    })
  }

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

  setAnswer(data) {
    this.setState({
        answer: data,
    })
  }

  setShown() {
    this.setState({
      shown: true,
    })
  } 


  render() {
    return (
      <div className='App'>
        <header className="App-header">
        Bangla Question Anserwing
        </header>
  
        <Form>
          <label style={this.state.styleLabel}>
            Enter the Question
          </label>
          <hr style={this.state.styleHr}></hr>
          <input style={this.state.styleInput} onChange={(e) => { this.setQuestion(e.target.value) }} type="text" />
  
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <label style={this.state.styleLabel}>
            Enter the Context
          </label>
          <hr style={this.state.styleHr}></hr>
          <input style={this.state.styleInput1} onChange={(e) => { this.setPassage(e.target.value) }} type="text" />


          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
          <hr style={this.state.styleHr}></hr>
        </Form>

        <Button onClick={this.computePressed}>Compute</Button>

        {this.state.shown &&
          <label style={this.state.styleLabel}>
            Answer
          </label>
        }

        {this.state.shown &&
          <Div>
            <text>
            {this.state.answer}
            </text>
          </Div>
        }
  
      </div>
    );
  }
  
}

export default App;
