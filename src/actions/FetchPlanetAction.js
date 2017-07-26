import axios from 'axios'
import { FETCH_PLANET, RECEIVE_PLANET } from '../action_types/ActionTypes'
const peopleURL = 'https://swapi.co/api/people'

export function fetchPlanet() {
  return axios.get(planetURL).then((response) => {
            dispatch({type: FETCH_PLANET, payload: response.data})
        }).catch((error) => {
          console.log(error);
            //dispatch({type: CALL_FETCH_PLANET_REJECTED, payload: error})
        })
}
