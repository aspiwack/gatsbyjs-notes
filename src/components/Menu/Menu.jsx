import React from 'react';
import './Menu.scss';

export const Menu = ({children}) => <div className="menu">{children}</div>;
export const Items = ({children}) => <MenuItem type="items">{children}</MenuItem>;
export const Jobs = ({children}) => <MenuItem type="jobs">{children}</MenuItem>;
export const Equipment = ({children}) => <MenuItem type="equipment">{children}</MenuItem>;
export const Formation = ({children}) => <MenuItem type="formation">{children}</MenuItem>;
export const Skills = ({children}) => <MenuItem type="skills">{children}</MenuItem>;

export const MenuItem = ({ children, type }) => {
  // console.log(children.split('\r'));
  const content = children.props !== undefined ?
    children :
    <ol>
      {children.split('\n').map((line, i) => <li key={i}>{line.trim()}</li>)}
    </ol>;

  return (
    <div className={`menu-item ${type}`}>
      <h5>{capitalize(type)}</h5>
      <div>
        {content}
      </div>
    </div>
  );
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
