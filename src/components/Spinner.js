import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt="" />
      </div>
    )
  }
}

export default Spinner