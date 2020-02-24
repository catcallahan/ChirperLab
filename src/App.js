import React, { Component } from "react";
import Newsfeed from '../src/Componants/Newsfeed/Newsfeed'


class App extends Component {
  state = { chirps: [
    {
      id: 1,
      words: "Hello!"
    },
  {
    id: 2,
    words: "Do you even Chirp?"
  },
{
  id:3,
  words: 'Chirpin all day!'
}]
}

insertChirp = (words) => {
  const newChirp = {
      id: 4,
      words
  }
  this.setState({ chirps: [...this.state.chirps, newChirp]})
}

  render(){
  return(
    <div className = 'newsfeed'>
      <Newsfeed chirps = {this.state.chirps} insertChirp = {this.insertChirp}/>
    </div>
  );
}
}

export default App;
