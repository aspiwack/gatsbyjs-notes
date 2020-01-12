import React from 'react';
import Weaknesses, { AttackTypes } from './Weaknesses/Weaknesses';
import ShieldIcon from './Weaknesses/Icons/images/Shield.png';
import './enemy.scss';

export default ({ enemyKey }) => {
  const enemy = enemies[enemyKey];
  const enemyImage = getEnemyImage(enemy.imageName);

  return (
    <div className="enemy-container">
      <div className="enemy-container-left">
        <h2 className="enemy-name">
          {enemy.name}
        </h2>
        <img className="enemy-image" src={enemyImage} alt={`${enemy.name} animated sprite`}/>
        <h4 className="enemy-hp">
          HP: {enemy.HP}
        </h4>
      </div>
      <div className="enemy-container-right">
        <div className="enemy-shield-containers">
          { enemy.shield.map(shield => (
            <div className="enemy-shield-container">
              <img className="enemy-shield-icon" src={ShieldIcon} alt="Enemy Shields"/>
              <div className="enemy-shield-amount">
                {shield}
              </div>
            </div>
          ))}
        </div>
        <div className="enemy-weakness">
          <Weaknesses weaknesses={enemy.weaknesses}/>
        </div>
      </div>
    </div>
  );
};

function getEnemyImage(imageName) {
  return require('../../images/Octopath/Sprites/Gifs/' + imageName);
}

const enemies = {
  'Simeon 1': {
    name: 'Simeon',
    HP: 64300,
    shield: [3, 5, 7],
    type: 'boss',
    imageName: 'SimeonA.gif',
    weaknesses: [
      [ AttackTypes.SPEAR, AttackTypes.DAGGER, AttackTypes.STAFF, AttackTypes.WIND, AttackTypes.DARK ]
    ]
  },
  'Simeon 2': {
    name: 'Simeon',
    HP: 96450,
    shield: [6, 8, 10],
    type: 'boss',
    imageName: 'SimeonB.gif',
    weaknesses: [
      [ AttackTypes.DAGGER ],
      [ AttackTypes.SWORD, AttackTypes.FIRE ],
      [ AttackTypes.AXE, AttackTypes.BOW, AttackTypes.ICE ]
    ]
  }
}
