'use strict';

const maxTotalStats = 20;
const maxSingleStat = 10;
const minSingleStat = 0;

const createKnight = (attack, armor, agility, endurance) => {
  if(!isNaN(attack) && !isNaN(armor) && !isNaN(agility) && !isNaN(endurance)) {
    return {
      knight: {
        attack: attack,
        armor: armor,
        agility: agility,
        endurance: endurance
      }
    };
  }
  else {
    console.err('Supplied parameters are not numbers');
    return new Error('NaN parameters');
  }

};

const createBaseKnight = () => createDragon(0,0,0,0);

const getHighestStat = (knight) => {
  // We do it in this order because some stats can be the same.
  // In the case of duplicates, we prefer stats in the following order:
  // attack > armor > agility > endurance
  const maxStat = Math.max(knight.attack, Math.max(knight.armor, Math.max(knight.agility)));
  
};
