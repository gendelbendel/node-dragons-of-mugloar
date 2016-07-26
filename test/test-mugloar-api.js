'use strict';

const Promise = require('bluebird');
const chai = require('chai');
const mugloar = require('../lib/mugloar-api');
const testData = require('../resources/test-data.js').gameData;
const xml2js = Promise.promisifyAll(require('xml2js'));

const parser = new xml2js.Parser({explicitArray: false});
const expect = chai.expect;

describe('Mugloar API', () => {

  context('#getNewGame()', () => {
    let body = {};
    it('should reply successfully', () => mugloar.getNewGame()
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        body = res.body;
      })
    );

    it('should have a valid body', () => {
      expect(body.gameId).to.be.a('number');
      expect(body.knight).to.be.an('object');
      expect(body.knight.attack).to.be.a('number');
      expect(body.knight.armor).to.be.a('number');
      expect(body.knight.agility).to.be.a('number');
      expect(body.knight.endurance).to.be.a('number');
    });
  });

  context('#getExistingGame()', () => {
    let body = {};
    let data = {};
    before(() => {
      data = testData.zen;
    });
    it('should reply successfully', () => mugloar.getExistingGame(data.gameId)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        body = res.body;
      })
    );

    it('should have a valid body', () => {
      expect(body.gameId).to.be.a('string');
      expect(body.knight).to.be.an('object');
      expect(body.knight.attack).to.be.a('number');
      expect(body.knight.armor).to.be.a('number');
      expect(body.knight.agility).to.be.a('number');
      expect(body.knight.endurance).to.be.a('number');
    });

    it('should have a body that matches saved details', () => {
      // Commented out until/if possible unintended behvavior is addressed;
      // See README.md Bugs
      // expect(body.gameId).to.equal(data.gameId);

      // If the above is commented, remove this next line
      expect(body.gameId).to.equal(data.gameId.toString());
      expect(body.knight.attack).to.equal(data.knight.attack);
      expect(body.knight.armor).to.equal(data.knight.armor);
      expect(body.knight.agility).to.equal(data.knight.agility);
      expect(body.knight.endurance).to.equal(data.knight.endurance);
    });
  });

  context('#getWeather()', () => {
    let body;
    let data;
    context('NMR weather', () => {
      before(() => {
        data = testData.nmr;
      });
      it('should reply successfully', () => mugloar.getWeather(data.gameId)
        .expect(200)
        .expect('Content-Type', /xml/)
        .then(res => {
          expect(res.text).to.be.a('string');
          body = res.text;
        })
      );
      it('should convert xml to json', () =>
        parser.parseStringAsync(body)
          .then(xml => {
            expect(xml.report).to.be.an('object');
            body = xml;
          })
      );
      it('should contain expected weather code', () => {
        expect(body.report.code).to.be.a('string');
        expect(body.report.code).to.equal(data.report.code);
        expect(body.report.code).to.have.lengthOf(3);
      });
    });
    context('T E weather', () => {
      before(() => {
        data = testData.zen;
      });
      it('should reply successfully', () => mugloar.getWeather(data.gameId)
        .expect(200)
        .expect('Content-Type', /xml/)
        .then(res => {
          expect(res.text).to.be.a('string');
          body = res.text;
        })
      );
      it('should convert xml to json', () =>
        parser.parseStringAsync(body)
          .then(xml => {
            expect(xml.report).to.be.an('object');
            body = xml;
          })
      );
      it('should contain expected weather code', () => {
        expect(body.report.code).to.be.a('string');
        expect(body.report.code).to.equal(data.report.code);
        expect(body.report.code).to.have.lengthOf(3);
      });
    });
    context('SRO weather', () => {
      before(() => {
        data = testData.sro;
      });
      it('should reply successfully', () => mugloar.getWeather(data.gameId)
        .expect(200)
        .expect('Content-Type', /xml/)
        .then(res => {
          expect(res.text).to.be.a('string');
          body = res.text;
        })
      );
      it('should convert xml to json', () =>
        parser.parseStringAsync(body)
          .then(xml => {
            expect(xml.report).to.be.an('object');
            body = xml;
          })
      );
      it('should contain expected weather code', () => {
        expect(body.report.code).to.be.a('string');
        expect(body.report.code).to.equal(data.report.code);
        expect(body.report.code).to.have.lengthOf(3);
      });
    });
    context('HVA weather', () => {
      before(() => {
        data = testData.hva;
      });
      it('should reply successfully', () => mugloar.getWeather(data.gameId)
        .expect(200)
        .expect('Content-Type', /xml/)
        .then(res => {
          expect(res.text).to.be.a('string');
          body = res.text;
        })
      );
      it('should convert xml to json', () =>
        parser.parseStringAsync(body)
          .then(xml => {
            expect(xml.report).to.be.an('object');
            body = xml;
          })
      );
      it('should contain expected weather code', () => {
        expect(body.report.code).to.be.a('string');
        expect(body.report.code).to.equal(data.report.code);
        expect(body.report.code).to.have.lengthOf(3);
      });
    });
    context('FOG (FUNDEFINEDG) weather', () => {
      before(() => {
        data = testData.fog;
      });
      it('should reply successfully', () => mugloar.getWeather(data.gameId)
        .expect(200)
        .expect('Content-Type', /xml/)
        .then(res => {
          expect(res.text).to.be.a('string');
          body = res.text;
        })
      );
      it('should convert xml to json', () =>
        parser.parseStringAsync(body)
          .then(xml => {
            expect(xml.report).to.be.an('object');
            body = xml;
          })
      );
      it('should contain expected weather code', () => {
        expect(body.report.code).to.be.a('string');
        expect(body.report.code).to.equal(data.report.code);
        expect(body.report.code).to.have.lengthOf(3);
      });
    });

  });

  context('#solveGame()', () => {

  });
});
