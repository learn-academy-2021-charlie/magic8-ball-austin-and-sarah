import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array

      answerArray: ["Think Bigger!", "My sources say yes", "No", "Sometimes", "Not Likely"],

      answerArray: ["Here is an answer", "You are the chosen one", "Maybe in another life", "Niagra balls", "If these balls could talk", "Seneca Balls Convention"],

      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection

    var item = answerArray[Math.floor(Math.random()*answerArray.length)];
    this.setState({ selectedAnswer: item })

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
        <div id="circle">
          <div id="innercircle">
            <div id="eight">8</div>
          </div>
        </div>
      </>
    )
  }
}

export default App
