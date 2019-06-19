import React from 'react';
import './App.css';
import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import chars from "./chars.json";
import Card from "./components/Card";

class App extends React.Component {

  state = {
    chars,
    clickedChars: [],
    score: 0,
    highScore: 0
  };

  handleClick = (event, charId) => {
    event.preventDefault();
    if(this.state.clickedChars.includes(charId)){
      this.incorrect()
    } else {
      this.setState(
        this.state.clickedChars.push(charId),
    console.log(this.state.clickedChars)

      )
    }
  }
render() {
  return (
    <div className="App">
      <Nav>
         {this.state.score}
         {this.state.highScore}
      </Nav>
      <Container>
      {this.state.chars.map( char => (
          <Card
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            onClick={()=>{this.handleClick(char.id)}}
          />
      ))}
      </Container>

    </div>
  )
}
}

export default App;
