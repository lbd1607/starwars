import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CharacterAvatar from "./CharacterAvatar";
// import CreateCharacter from './CreateCharacter';

const GET_CHARACTERS = gql`{
  {
    characters {
        id
        name
        homeplanet
        weapon
      }
  }  
}
`;

const characters = ({ selectCharacter }: { selectCharacter: any }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return `Loading...`;
  }
  if (error) {
    return `Error ${error.message}`;
  }

  return (
    <div className="flex flex-wrap items-cetner pb-16">
      {data.characters.map((character: any) => {
        <div
          key={character.id}
          className="lg:w-1/3 w-full p-4 text-center inline"
          onClick={selectCharacter.bind(this, character)}
        >
          <CharacterAvatar character={character} />
        </div>;
      })}
    </div>
  );
};

//37:07
