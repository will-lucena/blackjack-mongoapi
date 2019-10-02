# Simple Blackjack restapi

## Description

This repo is for my nosql class challenge what is to create a simple api using mongo as database and I choose node+express as backend.

I choose to connect my backend to a docker container with mongo running in my machine, so this project requests a docker machine with mongo to work

## Endpoints

* GET ``` /games/ ``` to list all created games

* POST ``` /games/ ``` to create a new game

* GET ``` /finishedGames/ ``` to list all finished games (games with more than 20 points)

* GET ``` /ongoingGames/ ``` to list all ongoing games (games with less than 21 points)

* GET ``` /games/:gameId ``` to get one single game with this gameId

* PUT ``` /games/:gameId ``` to make a play (pick a card) on the game with this gameId

* DELETE ``` /games/:gameId ``` to remove the game with this id