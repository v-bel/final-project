/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
import React from 'react';

export const CatchButton = props => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.poke.isCaught}
      className="btn btn-primary"
    >
      {props.poke.isCaught ? 'You caught me ;)' : 'Catch'}
    </button>
  );
};
