import React from 'react';
import AttackTypeIcon from './Icons/Icon.jsx';

export default ({ weaknesses }) => {
  const allPhaseWeaknesses = new Weaknesses(weaknesses).sort().getAllPhaseWeaknesses();

  return (
    <div className="enemy-weakness-container">
      { allPhaseWeaknesses.map((phaseWeaknesses, index) =>
        <PhaseWeakness key={index} weaknesses={phaseWeaknesses}/>
      )}
    </div>
  );
};

const PhaseWeakness = ({ weaknesses }) => {
  return (
    <div className="enemy-phase-weakness">
      {
        weaknesses.map(weakness => <AttackTypeIcon key={weakness} attackType={weakness}/>)
      }
    </div>
  );
};

export const AttackTypes = {
  SWORD: 'Sword',
  SPEAR: 'Spear',
  DAGGER: 'Dagger',
  AXE: 'Axe',
  BOW: 'Bow',
  STAFF: 'Staff',
  FIRE: 'Fire',
  ICE: 'Ice',
  THUNDER: 'Thunder',
  WIND: 'Wind',
  LIGHT: 'Light',
  DARK: 'Dark'
};

const AttackTypesOrder = Object.values(AttackTypes);

class Weaknesses {
  constructor(allPhaseWeaknesses) {
    // allPhaseWeaknesses is a double-sided array with each inner area representing the weaknesses of a phase
    this.allPhaseWeaknesses = allPhaseWeaknesses;
  }

  sort() {
    this.allPhaseWeaknesses.forEach(phaseWeaknesses => phaseWeaknesses.sort((a, b) => AttackTypesOrder.indexOf(a) - AttackTypesOrder.indexOf(b)));
    return this;
  }

  getAllPhaseWeaknesses() {
    return this.allPhaseWeaknesses;
  }

  getPhaseWeaknesses(phase = 0) {
    return this.allPhaseWeaknesses[phase];
  }
}
