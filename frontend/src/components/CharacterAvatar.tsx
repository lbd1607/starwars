import React, { Fragment } from "react";

const CharacterAvatar = ({ character }: { character: any }) => {
  return (
    <Fragment>
      <div id={character.id}></div>
    </Fragment>
  );
};

export default CharacterAvatar;
