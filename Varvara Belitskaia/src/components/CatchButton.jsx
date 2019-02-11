/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
import React from 'react';

export const CatchButton = ({ poke, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={poke.isCaught}
      className="btn btn-primary"
    >
      {poke.isCaught ? 'You caught me ;)' : 'Catch'}
    </button>
  );
};
