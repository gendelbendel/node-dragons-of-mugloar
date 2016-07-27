'use strict';

const dragon = require('./dragon');

const determineDragon = (knight, weatherCode) => {
  if (weatherCode === 'NMR') { // call function to weigh dragon
    return dragon.generateDragon(knight);
  }
  else if (weatherCode === 'T E') { // all stats must be 5
    return dragon.createDragon(5,5,5,5);
  }
  else if (weatherCode === 'HVA') { // claw must be 10, fire must be 0
    return dragon.createDragon(10,10,0,0);
  }
  else if (weatherCode === 'SRO') { // don't send a dragon or you lose
    return {};
  }
  else if (weatherCode === 'FUNDEFINEDG') { // arbitrary stats
    return dragon.createDragon(1,1,9,9);
  }
  else { // only 5 weathers, what are you doing bro
    console.log(`Weather doesnt exist: ${weatherCode}`);
    return new Error();
  }
};

const testDragon = (gameData) => {
  const knight = gameData.knight;
  const weatherCode = gameData.report.code;
  return determineDragon(knight, weatherCode);
};

exports.testDragon = testDragon;
exports.determineDragon = determineDragon;
