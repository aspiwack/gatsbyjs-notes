import React from 'react';
import './Grid.scss';

export const Grid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

export const Turn = ({ children, render, turn }) => {
  const content = render &&
    render.split('\n')
      .map(str => str.trim())
      .filter(str => str.length > 0)
      .map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br/>
        </React.Fragment>
      ));

  return (
    <div className="turn">
      { turn ?
        <h5>
          Turn {turn}
        </h5> :
        null
      }
      { render ?
        <p>
          {content}
        </p> :
        children
      }
    </div>
  );
}
