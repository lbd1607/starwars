import React, { Suspense } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CharacterAvatar from "./CharacterAvatar";
//import Posts from './Posts';

const GET_CHARACTER = gql`
  fragment Character($id: ID!) {
    character(id: $id) {
      name
    }
  }
`;

const Character = ({ character }: { character: any }) => {
  /*  { selectCharacter }: { selectCharacter: any } */
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: character.id },
  });

  if (loading) return "Loading...";
  if (error) return `Error ${error.message}`;

  return (
    <Suspense fallback={loading}>
      <React.Fragment>
        <div className="flex flex-wrap my-4">
          <button
            className="btn save"
            //onClick={selectCharacter.bind({ ...character }, null)}
          >
            Back
          </button>
        </div>
        <div className="flex flex-wrap items-start mb-4">
          <div className="lg:w-1/4 w-full rounded text-center">
            <CharacterAvatar character={character} />
          </div>
          <div className="px-4 flex-1 w-full">
            <p>{data.character.name}</p>
          </div>
        </div>
      </React.Fragment>
    </Suspense>
  );
};

export default Character;
