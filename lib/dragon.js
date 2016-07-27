'use strict';

const stats = require('./stat');

const createDragon = (scale, claw, wing, fire) => {
  let dragon =  {
    dragon: {
      scaleThickness: scale,
      clawSharpness: claw,
      wingStrength: wing,
      fireBreath: fire
    }
  };

  if(!isNaN(scale) && !isNaN(claw) && !isNaN(wing) && !isNaN(fire)) {
    let fixedStat;
    if(scale+claw+wing+fire > 20)
    {
      dragon.dragon = stats.fixOPStat(dragon.dragon);
    }
    else if(scale+claw+wing+fire < 20)
    {
      dragon.dragon = stats.fixRuntStat(dragon.dragon);
    }
    return dragon;
  }
  else {
    console.err('Supplied parameters are not numbers');
    return new Error('NaN parameters');
  }

};

const createBaseDragon = () => createDragon(0,0,0,0);

// I knew min/maxing in WoW would pay off!
const generateDragon = origKnight => {
  const knight = stats.getNewStats(origKnight);
  const weights = stats.maxTotalStats /
    (knight.attack + knight.armor + knight.agility + knight.endurance);
  return createDragon(
    stats.generateWeighedStat(weights, knight.attack),
    stats.generateWeighedStat(weights, knight.armor),
    stats.generateWeighedStat(weights, knight.agility),
    stats.generateWeighedStat(weights, knight.endurance)
  );
};

exports.createDragon = createDragon;
exports.createBaseDragon = createBaseDragon;
exports.generateDragon = generateDragon;
