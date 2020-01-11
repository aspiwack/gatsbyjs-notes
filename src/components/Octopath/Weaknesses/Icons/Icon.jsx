import React from 'react';
import Sword from './images/Sword.png';
import Spear from './images/Spear.png';
import Dagger from './images/Dagger.png';
import Staff from './images/Staff.png';
import Bow from './images/Bow.png';
import Axe from './images/Axe.png';
import Fire from './images/Fire.png';
import Ice from './images/Ice.png';
import Thunder from './images/Thunder.png';
import Wind from './images/Wind.png';
import Light from './images/Light.png';
import Dark from './images/Dark.png';
import { AttackTypes } from '../Weaknesses.jsx';

export const AttackTypeIcon = ({src}) => (
  <img className="enemy-attack-type-icon" src={src} alt=""/>
);

export const SwordIcon = () => (<AttackTypeIcon src={Sword}/>);
export const SpearIcon = () => (<AttackTypeIcon src={Spear}/>);
export const DaggerIcon = () => (<AttackTypeIcon src={Dagger}/>);
export const StaffIcon = () => (<AttackTypeIcon src={Staff}/>);
export const BowIcon = () => (<AttackTypeIcon src={Bow}/>);
export const AxeIcon = () => (<AttackTypeIcon src={Axe}/>);
export const FireIcon = () => (<AttackTypeIcon src={Fire}/>);
export const IceIcon = () => (<AttackTypeIcon src={Ice}/>);
export const ThunderIcon = () => (<AttackTypeIcon src={Thunder}/>);
export const WindIcon = () => (<AttackTypeIcon src={Wind}/>);
export const LightIcon = () => (<AttackTypeIcon src={Light}/>);
export const DarkIcon = () => (<AttackTypeIcon src={Dark}/>);

export default ({ attackType }) => {
  switch (attackType) {
    case AttackTypes.SWORD:
      return <SwordIcon/>;
    case AttackTypes.SPEAR:
      return <SpearIcon/>;
    case AttackTypes.DAGGER:
      return <DaggerIcon/>;
    case AttackTypes.STAFF:
      return <StaffIcon/>;
    case AttackTypes.BOW:
      return <BowIcon/>;
    case AttackTypes.AXE:
      return <AxeIcon/>;
    case AttackTypes.FIRE:
      return <FireIcon/>;
    case AttackTypes.ICE:
      return <IceIcon/>;
    case AttackTypes.THUNDER:
      return <ThunderIcon/>;
    case AttackTypes.WIND:
      return <WindIcon/>;
    case AttackTypes.LIGHT:
      return <LightIcon/>;
    case AttackTypes.DARK:
      return <DarkIcon/>;
    default:
      return null;
  }
};
