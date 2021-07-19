import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Here is an answer", "You are the chosen one", "Maybe in another life", "Niagra balls", "If these balls could talk", "Seneca Balls Convention"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    this.setState({ selectedAnswer: answerArray[Math.floor(Math.random() * answerArray.length)]})
  }

  render(){
    return (
      <>
        <h1>Magic 8 <a>BALLS</a></h1> 
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p>{ this.state.selectedAnswer }</p>
      </>
    )
  }
}

export default App
