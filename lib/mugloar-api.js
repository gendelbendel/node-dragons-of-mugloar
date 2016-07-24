'use strict';

const request = require('supertest-as-promised');

const baseUrl = 'http://www.dragonsofmugloar.com';

exports.getNewGame = () =>
  request(baseUrl)
    .get('/api/game');

exports.solveGame = (gameId, dragon) =>
  request(baseUrl)
    .put(`/api/game/${gameId}/solution`)
    .set('Accept', 'application/json')
    .data(dragon);

exports.getWeather = (gameId) =>
  request(baseUrl)
    .get(`/weather/api/report/${gameId}`);
