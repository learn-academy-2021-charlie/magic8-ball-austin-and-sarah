import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Here is an answer", "Yes", "No", "Sometimes", "Not Likely"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    var item = answerArray[Math.floor(Math.random()*answerArray.length)];
    this.setState({ selectedAnswer: item })
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
