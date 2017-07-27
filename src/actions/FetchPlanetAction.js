import { FETCH_PLANET, RECEIVE_PLANET } from '../action_types/ActionTypes'
import fetch from 'isomorphic-fetch'

function requestPlanet() {

  return {
    type: FETCH_PLANET,
    planet: {},
    receivedAt: null
  }
}

// set the planet object when data reqceived 
function receivePlanet(json) {
  return {
    type: RECEIVE_PLANET,
    planet: json,
    receivedAt: Date.now()
  }
}

// This function featch the planet data againts requested url
export function fetchPlanet(url) {
  return function (dispatch) {
    dispatch(requestPlanet())
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receivePlanet(json))
      )
  }
}
