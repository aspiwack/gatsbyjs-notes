import React from 'react';
import Weaknesses, { AttackTypes } from './Weaknesses/Weaknesses';

export default ({ enemyKey }) => {
  const enemy = enemies[enemyKey];
  const enemyImage = getEnemyImage(enemy.imageName);
  console.log(enemy);
  console.log(enemyImage);

  return (
    <div className="enemy-container">
      <img className="enemy-image" src={enemyImage}/>
      <div className="enemy-stats">
        <div className="enemy-hp">
          {enemy.HP}
        </div>
        <div className="enemy-weakness-container">
          <div className="enemy-shield">
            {enemy.shield[0]}
          </div>
          <div className="enemy-weakness">
            <Weaknesses weaknesses={enemy.weaknesses}/>
          </div>
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
    imageName: 'EnmTX_BosSimeon_L_A_cl.gif',
    weaknesses: [
      [ AttackTypes.SPEAR, AttackTypes.DAGGER, AttackTypes.STAFF, AttackTypes.WIND, AttackTypes.DARK ]
    ]
  }
}
