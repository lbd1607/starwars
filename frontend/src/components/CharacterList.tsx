import React from "react";
import { CharactersList, useCharacterContext } from "../store";

function CharacterListItems() {
  const { characters, updateCharacter, removeCharacter } =
    useCharacterContext();

  return (
    <>
      <ul>
        {characters.map((character: CharactersList) => (
          <div className="flex pt-2" key={character.id}>
            <div>
              <label>Name</label>
              <input
                className="inputbox"
                type="text"
                value={character.name}
                onChange={(evt) =>
                  updateCharacter(
                    character.id,
                    evt.target.value,
                    character.homeplanet,
                    character.weapon
                  )
                }
              />
            </div>
            <div>
              <label>Home Planet</label>
              <input
                className="inputbox"
                type="text"
                value={character.homeplanet}
                onChange={(evt) =>
                  updateCharacter(
                    character.id,
                    character.name,
                    evt.target.value,
                    character.weapon
                  )
                }
              />
            </div>
            <div>
              <label>Weapon</label>
              <input
                className="inputbox"
                type="text"
                value={character.weapon}
                onChange={(evt) =>
                  updateCharacter(
                    character.id,
                    character.name,
                    character.homeplanet,
                    evt.target.value
                  )
                }
              />
            </div>
            <button
              className="btn delete"
              onClick={() => removeCharacter(character.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

function CharacterList() {
  return (
    <>
      <CharacterListItems />
    </>
  );
}

export default CharacterList;
