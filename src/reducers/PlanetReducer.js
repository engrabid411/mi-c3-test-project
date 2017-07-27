import {
  FETCH_PLANET,
  RECEIVE_PLANET
} from '../actions/FetchPlanetAction'

const planet = (
  state={
      planet:{},
      isFetching: false,
      error: null
  },
  action) => {

  switch (action.type) {

    case 'FETCH_PLANET':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_PLANET':
      return Object.assign({}, state, {
        isFetching: false,
        planet: action.planet
      })
    default:
      return state
  }
}

export default planet
