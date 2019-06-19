import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
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

  incorrect = () => {
    this.setState({
      score: 0,
      clickedChars: []
    })
  }

  reshuffle = (array) => {
    let m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  newHighScoreChange = () => {
    console.log('score:', this.state.score);
    if (this.state.score >= this.state.highScore) {
      const newHighScore = this.state.score;
      this.setState({
        highScore: newHighScore
      })
    }
  }
  handleClick = (charId) => {
    // event.preventDefault();
    console.log("clicked" + charId)
    if (this.state.clickedChars.includes(charId)) {
      this.incorrect()
    } else {
      this.setState({
        clickedChars: [...this.state.clickedChars, charId],
        score: this.state.score + 1
      }, this.newHighScoreChange());
      this.reshuffle(this.state.chars);
      console.log("clicked" + charId, " score: " + this.state.score)
    }
  }
  render() {
    return (
      <div className="App">
        <Nav score={this.state.score}
          highScore={this.state.highScore} 
        />
        <Jumbotron />
        <Container>
          {this.state.chars.map(char => (
            <Card
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
              onClick={() => { this.handleClick(char.id) }}
            />
          ))}
        </Container>

      </div>
    )
  }
}

export default App;
