import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import chars from "./chars.json";
import Card from "./components/Card";

function App() {

  state = {
    chars
  };

  

  return (
    <div className="App">
      <Nav />
      <Container>
      {this.state.chars.map( char => (
          <Card
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
          />
      ))}
      </Container>

    </div>
  );
}

export default App;
