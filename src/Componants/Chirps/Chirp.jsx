import React, { Component } from 'react'

export class Chirp extends Component {
    render() {
        return (
            <div className = 'container-md d-flex justify-content-start mb-2 border bg-white text-info'>
            <p className='d-flex mb-1 mt-1'>{ this.props.chirp.words }</p>
            </div>
        )
    }
}

export default Chirp
