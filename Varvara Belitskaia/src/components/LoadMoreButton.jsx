/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
import React from 'react';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-light btn-lg mb-3 mx-1">
      Load more
    </button>
  );
};
