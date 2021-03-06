import React, { useContext, useEffect, useState } from 'react';
import CaitImg from '../../images/Octopath/Sprites/Gifs/Cait.gif';

const CaitContext = React.createContext({ cait: false, toggleCait: () => {}, enabled: true, enable: () => {} });

export default ({ children }) => {
  const [cait, setCait] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const toggleCait = () => setCait(prevCait => !prevCait);
  const enable = () => setEnabled(true);

  return (
    <CaitContext.Provider value={{ cait, toggleCait, enabled, enable }}>
      <CaitToggleButton/>
      {children}
    </CaitContext.Provider>
  );
};

export const CaitToggleButton = () => {
  const { cait, toggleCait, enabled } = useContext(CaitContext);

  if (!enabled) {
    return null;
  }

  return (
    <button
      style={{
        borderRadius: '50%',
        backgroundColor: cait ? 'lightgreen' : '#f8f8f8',
        boxShadow: '2px 2px 6px 3px #afafaf',
        width: '6vw',
        height: '6vw',
        minWidth: '40px',
        minHeight: '40px',
        maxWidth: '80px',
        maxHeight: '80px',
        position: 'fixed',
        top: '2vw',
        right: '2vw',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={toggleCait}
    >
      <img style={{ width: '3vw', minWidth: '20px', maxWidth: '40px' }} src={CaitImg} alt="Cait Animated Icon"/>
    </button>
  );
};

export const IfCait = ({ children, cait = true }) => {
  const { cait: caitFound, enabled, enable } = useContext(CaitContext);

  useEffect(() => {
    if (!enabled) {
      enable();
    }
  }, [enable, enabled]);

  return cait === caitFound ?
    <>{children}</> :
    null;
};

export const Cait = ({ children }) => <IfCait children={children} cait={true}/>;
export const NoCait = ({ children }) => <IfCait children={children} cait={false}/>;
