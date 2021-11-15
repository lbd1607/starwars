import React from "react";
import { useCharacterContext } from "../store";

function AddCharacter() {
  const { newCharacter, setNewCharacter, addCharacter } = useCharacterContext();

  return (
    <div className="mx-20 px-5 py-10 card w-1/3">
      <h3>Add a New Character</h3>
      <div className="my-5">
        <label className="block">Name</label>
        <input
          className="inputbox ml-8 mt-1"
          value={newCharacter}
          onChange={(evt) => setNewCharacter(evt.target.value)}
        />
      </div>
      <div className="my-5">
        <label className="block">Home Planet</label>
        <input
          className="inputbox ml-8 mt-1"
          value={newCharacter}
          onChange={(evt) => setNewCharacter(evt.target.value)}
        />
      </div>
      <div className="my-5">
        <label className="block">Weapon</label>
        <input
          className="inputbox ml-8 mt-1"
          value={newCharacter}
          onChange={(evt) => setNewCharacter(evt.target.value)}
        />
      </div>
      <button className="ml-12 mt-5 btn save" onClick={() => addCharacter()}>
        Add Character
      </button>
    </div>
  );
}

export default AddCharacter;
