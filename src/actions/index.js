'use strict';

const fetch = require('isomorphic-fetch');

const gamesListUrl = 'http://stage.whitehatgaming.com/progtest/games.xml';
const jackpotsUrl = 'http://stage.whitehatgaming.com/progtest/jackpots.php';

const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';

const REQUEST_JACKPOT_AMOUNTS = 'REQUEST_JACKPOT_AMOUNTS';
const RECEIVE_JACKPOT_AMOUNTS = 'RECEIVE_JACKPOT_AMOUNTS';

const REQUEST_GAMES = 'REQUEST_GAMES';
const RECEIVE_GAMES = 'RECEIVE_GAMES';

function requestJackpotAmounts() {
    return {
        type: REQUEST_JACKPOT_AMOUNTS
    };
}

function receiveJackpotAmounts(json) {
    if (String(json) === 'error') {
        return {
            type: RECEIVE_JACKPOT_AMOUNTS,
            error: true
        };
    }
    return {
        type: RECEIVE_JACKPOT_AMOUNTS,
        amounts: json,
        receivedAt: Date.now()
    };
}

function requestGames() {
    return {
        type: REQUEST_GAMES
    };
}

function receiveGames(json) {
    if (String(json) === 'error') {
        return {
            type: RECEIVE_GAMES,
            error: true
        }
    }
    return {
        type: RECEIVE_GAMES,
        games: json
    }
}

function changeCategoryFilter(filter) {
    return { type: CHANGE_CATEGORY_FILTER, filter };
}

function fetchGames() {
    return function (dispatch) {
        dispatch(requestGames());

        return fetch(gamesListUrl)
          .then(response => response.text())
          .then(text => {
              let parser;
              let xmlDoc;
              if (window.DOMParser) {
                  parser = new DOMParser();
                  xmlDoc = parser.parseFromString(text,"text/xml");
              }

              return Array.prototype.map.call(xmlDoc.getElementsByTagName('item'), item=>item)
                .map(item => {
                  return {
                      name: item.getAttribute('gname'),
                      category: item.getAttribute('class'),
                      image: item.getAttribute('g_img'),
                      link: item.getAttribute('g_link'),
                      jackpotId: item.getAttribute('jpdriver')
                  };
              });
          })
          .then(json => dispatch(receiveGames(json))
          )
          .catch(() => dispatch(receiveGames('error')));
    }
}

function fetchJackpotAmounts() {
    return function(dispatch) {
        dispatch(requestJackpotAmounts());

        return fetch(jackpotsUrl)
          .then(response => response.json())
          .then(json => dispatch(receiveJackpotAmounts(json)))
          .catch(() => dispatch(receiveJackpotAmounts('error')));
    }
}

module.exports = {
    REQUEST_GAMES,
    RECEIVE_GAMES,
    CHANGE_CATEGORY_FILTER,
    REQUEST_JACKPOT_AMOUNTS,
    RECEIVE_JACKPOT_AMOUNTS,
    requestGames,
    receiveGames,
    changeCategoryFilter,
    requestJackpotAmounts,
    receiveJackpotAmounts,
    fetchGames,
    fetchJackpotAmounts
};