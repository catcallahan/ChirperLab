import React, { Component } from "react";
import Chirp from "../Chirps/Chirp";
import Chirpbird from "./chirpbird.png";

export class Newsfeed extends Component {
  state = {
    words: ""
  };

  changeValue = e => {
    this.setState({ words: e.target.value });
  };

  addChirp = () => {
    this.props.insertChirp(this.state.words);
    this.setState({ words: "" });
  };

  render() {
    return (
      <div className="container d-flex flex-column pt-3 ">
       <div className ='d-flex flex-row justify-content-lg-between'>
        <h1 className="text-info mb-0 ">ChirpChirp</h1>
        <img
              src={Chirpbird}
              alt="chirpy"
              height="70px"
              width="70px"
              className="pb-1"
            />
       </div>

        <div className="container-lg d-flex justify-content-start align-items-start pl-0 pr-0 pb-3 bg-light">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What's Chirpin?"
              value={this.state.words}
              onChange={this.changeValue}
            />
            <button onClick={this.addChirp}>Chirp it!</button>
          </div>
        </div>
        <div className ='d-flex flex-column bg-light'>
        {this.props.chirps.map(chirp => (
          <Chirp key={chirp.id} chirp={chirp} />
        ))}

        </div>
        </div>
    );
  }
}

export default Newsfeed;
