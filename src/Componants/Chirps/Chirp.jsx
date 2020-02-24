import React, { Component } from 'react'

export class Chirp extends Component {
    render() {
        return (
            <div className = 'container-md d-flex justify-content-start border bg-white text-info'>
            <p>{ this.props.chirp.words }</p>
            </div>
        )
    }
}

export default Chirp
