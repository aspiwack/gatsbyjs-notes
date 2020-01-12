import React from 'react';
import './Grid.scss';

export const Grid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

export const Turn = ({ children, turn }) => (
  <div className="turn">
    { turn ?
      <h5>
        Turn {turn}
      </h5> :
      null
    }
    {children}
  </div>
);
