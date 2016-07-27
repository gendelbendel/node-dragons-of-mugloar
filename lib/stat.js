'use strict';

// All of this could be hard coded, since it is very simple.
// We do it this way to easily support different max ranges for stats.
const maxSingleStat = 10;
const minSingleStat = 0;
const maxTotalStats = 20;
const totalNumStats = 4;

const generateWeighedStat = (weights, baseStat) =>
  Math.max(
    Math.min(
      Math.round(weights * baseStat),
      maxSingleStat ),
    minSingleStat);
    // dragon: {
    //   scaleThickness: scale,
    //   clawSharpness: claw,
    //   wingStrength: wing,
    //   fireBreath: fire
    // }
const fixOPStat = dragon => {
  const stat = Math.max(dragon.scaleThickness, Math.max(dragon.clawSharpness,
    Math.max(dragon.wingStrength, dragon.fireBreath)));
  return modifyDragonStats(dragon, stat);
};

const fixRuntStat = dragon => {
  const stat = Math.min(dragon.scaleThickness, Math.min(dragon.clawSharpness,
    Math.min(dragon.wingStrength, dragon.fireBreath)));
  return modifyDragonStats(dragon, stat);
};

const getDragonTotalStats = dragon =>
  dragon.scaleThickness + dragon.clawSharpness + dragon.wingStrength + dragon.fireBreath;

const modifyDragonStats = (dragon, foundStat) => {
  const total = getDragonTotalStats(dragon);
  let myDragon = dragon;
  if(dragon.scaleThickness === foundStat) {
    myDragon.scaleThickness += maxTotalStats - total
  }
  else if(dragon.clawSharpness === foundStat) {
    myDragon.clawSharpness += maxTotalStats - total
  }
  else if(dragon.wingStrength === foundStat) {
    myDragon.wingStrength += maxTotalStats - total
  }
  else if(dragon.fireBreath === foundStat) {
    myDragon.fireBreath += maxTotalStats - total
  }
  return myDragon;
}


const getOffset = () => {
  return maxTotalStats / totalNumStats;
};

const getNewStats = knight => {
  let myKnight = knight;
  const maxStat = Math.max(knight.attack, Math.max(knight.armor, Math.max(knight.agility, knight.endurance)));
  if(knight.attack === maxStat) {
    myKnight.attack += getOffset();
  } else if(knight.armor === maxStat) {
    myKnight.armor += getOffset();
  } else if(knight.agility === maxStat) {
    myKnight.agility += getOffset();
  } else if(knight.endurance === maxStat) {
    myKnight.endurance += getOffset();
  }
  return myKnight;
};
exports.maxSingleStat = maxSingleStat;
exports.minSingleStat = minSingleStat;
exports.maxTotalStats = maxTotalStats;

exports.fixOPStat = fixOPStat;
exports.fixRuntStat = fixRuntStat;
exports.generateWeighedStat = generateWeighedStat;
exports.getNewStats = getNewStats;
