import React, { Suspense, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CharacterAvatar from "./CharacterAvatar";
import { CharactersList } from "../store";
// import CreateCharacter from './CreateCharacter';

const GET_CHARACTERS = gql`
  {
    characters {
      id
      name
      homeplanet
      weapon
    }
  }
`;

const Characters = (/* { selectCharacter }: { selectCharacter: any } */) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return `Loading...`;
  }
  if (error) {
    return `Error ${error.message}`;
  }

  return (
    <Suspense fallback={loading}>
      <div className="mx-2">
        <div className="flex flex-wrap pb-16 mx-4">
          {data.characters.map((character: any) => (
            <div
              key={character.id}
              className="lg:w-1/4 sm:w-full inline card p-4 m-16"
              //onClick={setCharacter(character)}
            >
              <div className="p-10">
                <p>ID: {character.id}</p>
                <p>Name: {character.name}</p>
                <p>Homeplanet: {character.homeplanet}</p>
                <p>Weapon: {character.weapon}</p>
              </div>

              <CharacterAvatar character={character} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Characters;
