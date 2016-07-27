'use strict';

const Promise = require('bluebird');
const chai = require('chai');
const dragonCreator = require('../lib/dragon-creator');
const mugloar = require('../lib/mugloar-api');
const dragons = require('../resources/test-data.js').gameData;
const xml2js = Promise.promisifyAll(require('xml2js'));

const parser = new xml2js.Parser({explicitArray: false});
const expect = chai.expect;

describe('dragon-creator', () => {
  it.skip('should have the same dragon', () => {
    const dragon = dragonCreator.testDragon(dragons.nmrthree);
    const baseDragon = dragons.nmrthree.dragon;
    expect(dragon).to.deep.equal(baseDragon);
  });
  let body = {};
  let weatherCode;
  it('should win', () => {
    return mugloar.getNewGame()
      .then(res => {
        body = res.body;
        console.log(JSON.stringify(body));
        return mugloar.getWeather(body.gameId);
      })
      .then(res => {
        return parser.parseStringAsync(res.text)
      })
      .then(xml => {
        weatherCode = xml.report.code;
        console.log(`weatherCode: ${weatherCode}`);
        return dragonCreator.determineDragon(body.knight, weatherCode);
      })
      .then(myDrag => {
        console.log(JSON.stringify(myDrag));
        return mugloar.solveGame(body.gameId, myDrag);
      })
      .then(vic => {
        console.log(JSON.stringify(vic.body));
        expect(vic.body.status).to.equal('Victory');
      });
  });
});
