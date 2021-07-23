import logo from './logo.svg';
import cancha from './cancha.jpg';
import cristiano from './cristiano.png';
import messi from './messi.png';
import neymar from './neymar.png';
import './App.css';
import {players} from "./players"
import React from "react"
import ReactDOM from 'react-dom';

const title = ""

const showBackground = true;

const style_back_img = {
  marginLeft : "25%",
}

const backgroundImg = <img src={cancha} style={style_back_img }/>

const style_h1 = {
  marginLeft : "40%",
}

const images = []

// for(const player in players){
//   images.push(
//     <img
//       key = {player}
//       className = "player"
//       alt = {player}
//       src = {players[player].image}
//       aria-label = {player}
//       role = "button"
//       onClick = {displayFact}
//     />
//   )
// }

const styleCris = {
  position : "absolute",
  top : "180px",
  left : "350px",
  width : "200px"
}

images.push(
    <img
      key = "cristiano"
      className = "cristiano"
      alt = "cristiano"
      src = {cristiano}
      aria-label = "cristiano"
      role = "button"
      onClick = {displayFact}
      style = {styleCris}
    />
)

const styleMessi = {
  position : "absolute",
  top : "180px",
  right : "570px",
  width : "200px"
}

images.push(
    <img
      key = "messi"
      className = "messi"
      alt = "messi"
      src = {messi}
      aria-label = "messi"
      role = "button"
      onClick = {displayFact}
      style = {styleMessi}
    />
)

const styleNey = {
  position : "absolute",
  top : "180px",
  right : "350px",
  width : "200px"
}

images.push(
    <img
      key = "neymar"
      className = "neymar"
      alt = "neymar"
      src = {neymar}
      aria-label = "neymar"
      role = "button"
      onClick = {displayFact}
      style = {styleNey}
    />
)

function displayFact(e){
  const selectedPlayer = e.target.alt
  const playerInfo = players[selectedPlayer]
  const optionIndex = Math.floor(Math.random()*playerInfo.facts.length)

  const funFact = playerInfo.facts[optionIndex]
  console.log(funFact)


  document.getElementById("fact").innerHTML = funFact
}

const styleFact = {
  position : "absolute",
  top : "100px",
  left : "33%",
  width : "500px",
  backgroundColor : "#000",
  color : "#fff"
}

const playersFact = 
  (
    <div>
      <h1 style={style_h1}>{title == "" ? "Click on any player" : title}</h1>

      {showBackground && backgroundImg}

      <div className="players">
        {images}
      </div>

      <p id="fact" style={styleFact}>
      
      </p>

    </div>
  )


 
function App() {
  return (
    <div>

    </div>
  )
}

ReactDOM.render(playersFact, document.getElementById("react-all"))

export default App;
