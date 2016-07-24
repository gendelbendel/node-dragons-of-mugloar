'use strict';

const Promise = require('bluebird');
const chai = require('chai');
const mugloar = require('../lib/mugloar-api');
const xml2js = Promise.promisifyAll(require('xml2js'));
const parser = new xml2js.Parser({explicitArray: false});

const expect = chai.expect;

describe('Mugloar API', () => {
  const gameBody =
  {
    gameId: 7795598,
    knight: {
      name: 'Sir. Norman Hale of Nunavut',
      attack: 0,
      armor: 8,
      agility: 4,
      endurance: 8
    }
  };
  // beforeEach(() => {
  //   gameId = 7795598;
  // });
  describe('#getNewGame()', () => {
    let body = {};
    it('should reply successfully', () => mugloar.getNewGame()
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        body = res.body;
        //console.log(body);
      })
    );

    it('should have a valid body', () => {
      expect(body.gameId).to.be.a('number');
      expect(body.knight).to.be.an('object');
      expect(body.knight.attack).to.be.a('number');
      expect(body.knight.armor).to.be.a('number');
      expect(body.knight.agility).to.be.a('number');
      expect(body.knight.endurance).to.be.a('number');
    })

  });

  describe('#getWeather()', () => {
    let body;
    it('should reply successfully', () => mugloar.getWeather(gameBody.gameId)
      .expect(200)
      .expect('Content-Type', /xml/)
      .then(res => {
        expect(res.text).to.be.a('string');
        body = res.text;
        //console.log(body);
      })
    );
    it('should convert xml to json', () => {
      return parser.parseStringAsync(body)
        .then(xml => {
          //console.log(xml);
          expect(xml.report).to.be.an('object');
          expect(xml.report.code).to.be.a('string');
          expect(xml.report.code).to.have.lengthOf(3);
          body = xml;
        });
    });
  });

  describe('#solveGame()', () => {

  });

});
