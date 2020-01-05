// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    this.state({
      timeClicked: 0
    })
  }
  handleClick=()=>{
    this.setState(previousState=>{
      return{
      timeClicked=previousState.timeClicked+1
    }
    })
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timeClicked}</button>
    )
  }
}
