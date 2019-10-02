'use strict';


var mongoose = require('mongoose'),
  Game = mongoose.model('Games');

exports.listAllGames = function (req, res) {
  Game.find({}, function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

exports.listOngoingGames = function (req, res) {
  Game.find({ status: 'ongoing' }, function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

exports.listFinishedGames = function (req, res) {
  Game.find({ status: 'completed' }, function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

exports.createNewGame = function (req, res) {
  let newGame = new Game(req.body);
  newGame.save(function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};

exports.findGame = function (req, res) {
  Game.findById(req.params.gameId, function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json(Game);
  });
};


exports.makeAPlay = function (req, res) {
  Game.findById(req.params.gameId).exec((err, game) => {
    game.currentPoints += Math.floor(Math.random() * (11)) + 1;
    game.status = game.currentPoints >= 21 ? 'completed' : 'ongoing';
    game.save()

    if (err) {
      res.send(err);
    }
    res.json(game);
  })
};

exports.deleteGame = function (req, res) {
  Game.remove({
    _id: req.params.gameId
  }, function (err, Game) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Game successfully deleted' });
  });
};
