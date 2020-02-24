import React, { Component } from "react";
import Chirp from "../Chirps/Chirp"

export class Newsfeed extends Component {
  render() {
    return (
      <div className="container d-flex flex-column pt-3 ">
        <h1 className = 'text-info'>ChirpChirp</h1>
        <div className="container-lg d-flex justify-content-start align-items-start pl-0 pr-0 pb-3 bg-light">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What's Chirpin?"
            />
            <button>Chirp it!</button>
          </div>
        </div>
        <Chirp />
      </div>
    );
  }
}

export default Newsfeed;
