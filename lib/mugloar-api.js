'use strict';

const request = require('supertest-as-promised');

const baseUrl = 'http://www.dragonsofmugloar.com';

exports.getNewGame = () =>
  request(baseUrl)
    .get('/api/game');

exports.getExistingGame = gameId =>
  request(baseUrl)
    .get(`/api/game/${gameId}`);

exports.solveGame = (gameId, dragon) =>
  request(baseUrl)
    .put(`/api/game/${gameId}/solution`)
    .set('Accept', 'application/json')
    .send(dragon);

exports.getWeather = gameId =>
  request(baseUrl)
    .get(`/weather/api/report/${gameId}`);
