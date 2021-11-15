import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from "react";

import Characters from "./components/Characters";

export interface CharactersList {
  id: number;
  name: string;
  homeplanet: string;
  weapon: string;
  done: boolean;
}

const addCharacter = (
  characters: CharactersList[],
  name: string,
  homeplanet: string,
  weapon: string
): CharactersList[] => [
  ...characters,
  {
    id: Math.max(0, Math.max(...characters.map(({ id }) => id))) + 1,
    name,
    homeplanet,
    weapon,
    done: true,
  },
];

const updateCharacter = (
  characters: CharactersList[],
  id: number,
  name: string,
  homeplanet: string,
  weapon: string
): CharactersList[] =>
  characters.map((character) => ({
    ...character,
    name: character.id === id ? name : character.name,
    homeplanet: character.id === id ? homeplanet : character.homeplanet,
    weapon: character.id === id ? weapon : character.weapon,
  }));

const removeCharacter = (
  characters: CharactersList[],
  id: number
): CharactersList[] => characters.filter((character) => character.id !== id);

const useCharacters = (initial: CharactersList[] = []) => {
  const [characters, setCharacters] = useState<CharactersList[]>(initial);
  const [newCharacter, setNewCharacter] = useState<string>("");

  return {
    characters,
    newCharacter,
    setNewCharacter,
    addCharacter: useCallback(() => {
      setCharacters((chr) =>
        addCharacter(chr, newCharacter, newCharacter, newCharacter)
      );
      setNewCharacter("");
    }, [newCharacter]),
    updateCharacter: (
      id: number,
      name: string,
      homeplanet: string,
      weapon: string
    ) =>
      setCharacters((chr) =>
        updateCharacter(chr, id, name, homeplanet, weapon)
      ),
    removeCharacter: (id: number) =>
      setCharacters((chr) => removeCharacter(chr, id)),
    load: (newCharacters: CharactersList[]) => setCharacters(newCharacters),
  };
};

const CharacterContext = createContext<ReturnType<typeof useCharacters> | null>(
  null
);

export const useCharacterContext = () => useContext(CharacterContext)!;

export function CharacterProvider({ children }: { children: ReactNode }) {
  return (
    <CharacterContext.Provider value={useCharacters([])}>
      {children}
    </CharacterContext.Provider>
  );
}
