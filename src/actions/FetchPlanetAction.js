import { FETCH_PLANET, RECEIVE_PLANET } from '../action_types/ActionTypes'
import fetch from 'isomorphic-fetch'

function requestPlanet() {

  return {
    type: FETCH_PLANET,
    planet: {},
    receivedAt: null
  }
}

function receivePlanet(json) {
  return {
    type: RECEIVE_PLANET,
    planet: json,
    receivedAt: Date.now()
  }
}

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
