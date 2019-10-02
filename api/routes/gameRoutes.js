'use strict';
module.exports = function (app) {
  var game = require('../controllers/gameController');

  // game Routes
  app.route('/games')
    .get(game.listAllGames)
    .post(game.createNewGame);

  app.route('/finishedGames/')
    .get(game.listFinishedGames)

  app.route('/ongoingGames/')
    .get(game.listOngoingGames)


  app.route('/games/:gameId')
    .get(game.findGame)
    .put(game.makeAPlay)
    .delete(game.deleteGame);
};