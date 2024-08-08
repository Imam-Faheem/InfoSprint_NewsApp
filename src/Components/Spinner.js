import React, { Component } from 'react'
import SpinnerImg from './SpinnerImg.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" style={{top:"90%"}}>
        <img  src={SpinnerImg} alt="SpinnerImg" style={{width: '10%', height: '10%'}}  />
        </div>
    )
  }
}

export default Spinner