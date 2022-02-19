import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';
import Bio from './components/Bio';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => console.error(err));
  }, [])
  

  //set up button functions
  const openBio = (character) => {
    setCurrentCharacter(character);
  }
  const closeBio = () => {
    setCurrentCharacter({});
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {characters.map(character => {
        return <Character char={character} key={character.name} openBio={openBio}/>
      })}

      {currentCharacter && <Bio bio={currentCharacter} closeBio={closeBio}/>}      
      
    </div>
  );
}

export default App;
