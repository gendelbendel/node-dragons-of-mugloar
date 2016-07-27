'use strict';

exports.gameData = {
  nmr: {
    gameId: 5158282,
    knight: {
      name: 'Sir. Marcus Soto of Northwest Territories',
      attack: 2,
      armor: 5,
      agility: 6,
      endurance: 7
    },
    dragon: {
      dragon: { // stats need to be calculated per normal weather
        scaleThickness: 1,
        clawSharpness: 6,
        wingStrength: 4,
        fireBreath: 9
      }
    },
    report: {
      code: 'NMR'
    }
  },
  nmrtwo: {
    gameId: '8105031',
    knight: {
      name: 'Sir. Max Alvarez of Ontario',
      attack: 5,
      armor: 3,
      agility: 5,
      endurance: 7
    },
    dragon: {
      dragon: { // stats need to be calculated per normal weather
        scaleThickness: 4,
        clawSharpness: 2,
        wingStrength: 4,
        fireBreath: 10
      }
    },
    report: {
      code: 'NMR'
    }
  },
  nmrthree: {
    gameId: '6105016',
    knight: {
      name: 'Sir. Max Alvarez of Ontario',
      attack: 0,
      armor: 6,
      agility: 7,
      endurance: 7
    },
    dragon: {
      dragon: { // stats need to be calculated per normal weather
        scaleThickness: 4,
        clawSharpness: 2,
        wingStrength: 4,
        fireBreath: 10
      }
    },
    report: {
      code: 'NMR'
    }
  },
  zen: {
    gameId: 7795598,
    knight: {
      name: 'Sir. Norman Hale of Nunavut',
      attack: 0,
      armor: 8,
      agility: 4,
      endurance: 8
    },
    dragon: {
      dragon: { // all stats must be 5
        scaleThickness: 5,
        clawSharpness: 5,
        wingStrength: 5,
        fireBreath: 5
      }
    },
    report: {
      code: 'T E'
    }
  },
  hva: {
    gameId: 6969568,
    knight: {
      name: 'Sir. Chad Luna of Prince Edward Island',
      attack: 5,
      armor: 3,
      agility: 5,
      endurance: 7
    },
    dragon: {
      dragon: { // needs 10 claw and 0 fire, rest dont matter
        scaleThickness: 10,
        clawSharpness: 10,
        wingStrength: 0,
        fireBreath: 0
      }
    },
    report: {
      code: 'HVA'
    }
  },
  sro: {
    gameId: 4804977,
    knight: {
      name: 'Sir. Chris Willis of Saskatchewan',
      attack: 5,
      armor: 5,
      agility: 8,
      endurance: 2
    },
    dragon: {}, // dont send the dragon
    report: {
      code: 'SRO'
    }
  },
  fog: {
    gameId: 12323,
    knight: {
      name: 'Sir. Kyle Bowers of Quebec',
      attack: 6,
      armor: 7,
      agility: 3,
      endurance: 4
    },
    dragon: {
      dragon: { // stats can be random
        scaleThickness: 10,
        clawSharpness: 10,
        wingStrength: 0,
        fireBreath: 0
      }
    },
    report: {
      code: 'FUNDEFINEDG' // don't ask me
    }
  }
};
