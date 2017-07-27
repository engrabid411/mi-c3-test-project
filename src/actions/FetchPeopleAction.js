import { FETCH_PEOPLE, RECEIVE_PEOPLE } from '../action_types/ActionTypes' // constants
const peopleURL = 'https://swapi.co/api/people/?page='
import fetch from 'isomorphic-fetch'

//request people
function requestPeople() {
  return {
    type: FETCH_PEOPLE,
    people_list: {},
    receivedAt: null
  }
}

// this function is called to set the action when data received
function receivePeople(json) {
  return {
    type: RECEIVE_PEOPLE,
    people_list: json,
    receivedAt: Date.now()
  }
}

// this function handles the api requests
export function fetchPeople(page) {
  return function (dispatch) {
    dispatch(requestPeople())
    return fetch(peopleURL+page)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receivePeople(json))
      )
  }
}
