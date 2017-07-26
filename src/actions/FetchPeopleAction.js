import { FETCH_PEOPLE, RECEIVE_PEOPLE } from '../action_types/ActionTypes'
const peopleURL = 'https://swapi.co/api/people'
import fetch from 'isomorphic-fetch'

function requestPeople() {

  return {
    type: FETCH_PEOPLE
  }
}

function receivePeople(json) {
  return {
    type: RECEIVE_PEOPLE,
    people_list: json,
    receivedAt: Date.now()
  }
}

export function fetchPeople() {
  return function (dispatch) {
    dispatch(requestPeople())
    return fetch(peopleURL)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receivePeople(json))
      )
  }
}
