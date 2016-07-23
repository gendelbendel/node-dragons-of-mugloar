'use strict';

const Promise = require('bluebird')
const chai = require('chai')
const request = require('supertest-as-promised');
const mugloar = require('../lib/mugloar-api');
const xml2js = Promise.promisifyAll(require('xml2js')).Parser({explicitArray: false});
//const parser = new xml2js.Parser({explicitArray: false});

const expect = chai.expect;

describe('Mugloar API', () => {
  let gameId = 7795598;

  // beforeEach(() => {
  //   gameId = 7795598;
  // });

  it.skip('should get a valid new game', () => mugloar.getNewGame()
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(res => {
      expect(res.body).to.be.an('object');
      expect(res.body.gameId).to.be.a('number');
      expect(res.body.knight).to.be.an('object');
      expect(res.body.knight.attack).to.be.a('number');
      expect(res.body.knight.armor).to.be.a('number');
      expect(res.body.knight.agility).to.be.a('number');
      expect(res.body.knight.endurance).to.be.a('number');
      this.gameId = res.body.gameId;
      console.log('Got gameId: ' + this.gameId + '\n');
    })
  );

  it('should get the weather with given gameId', () => mugloar.getWeather(gameId)
    .expect(200)
    .expect('Content-Type', /xml/)
    .expect(res => xml2js.parseStringAsync(res.text)
      .then(xml => {
        console.log('Current gameId: ' + this.gameId + '\n');
        console.log(xml);
        //expect(xml.report.code).to.be.a('string');
        return expect(xml.report.code).to.equal('NMR');
      }))

  );
});
