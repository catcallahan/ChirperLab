import React, { Component } from 'react'

export class Chirp extends Component {
    render() {
        return (
            <div className = 'container-md d-flex justify-content-start border bg-white text-info'>
            {/* text value = input from newsfeed input field */}
            <p>Chirpin away all day!</p>
            </div>
        )
    }
}

export default Chirp
