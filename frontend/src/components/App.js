import React, { useState } from "react";
import { CharacterProvider } from "../store";
import CharacterList from "./CharacterList";
import AddCharacter from "./AddCharacter";
import Characters from "./Characters";
import Character from "./Character";

function App() {
  const [selectedCharacter, setselectedCharacter] = useState([]);
  return (
    <div className="mx-16 my-8">
      <CharacterProvider>
        {/*   <Character
          character={selectedCharacter}
          selectCharacter={selectedCharacter}
        /> */}
        <h1 className="pt-10 px-20">Characters</h1>
        <Characters
          character={selectedCharacter}
          selectCharacter={selectedCharacter}
        />
        <CharacterList />
        <AddCharacter />
      </CharacterProvider>
    </div>
  );
}

export default App;
