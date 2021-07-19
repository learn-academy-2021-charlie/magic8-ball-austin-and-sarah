import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["It is certain.", "It is decidedly so.", 'Without a doubt.', 'Ask again later.', 'Cannot predict now.', 'Do not count on it.', 'Very Doubtful.'],
      selectedAnswer: ""
    }
    this.baseState = this.state
  }
  clearInput = () => {
    //document.getElementById('inputBox').reset();
    
  }
  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNumber = getRandomInt(7)
    this.setState({ selectedAnswer: answerArray[randomNumber]})

    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode(answerArray[randomNumber]);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p>{ this.state.selectedAnswer }</p>
        <p>Previous Answers: </p>
      </>
    )
  }
}

export default App
