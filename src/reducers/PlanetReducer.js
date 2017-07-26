import {
  FETCH_PLANET,
  CALL_FETCH_PLANET_REJECTED
} from '../actions/FetchPlanetAction'

const planet = (
  state={
      people_list:{},
      fetch_done: false,
      error: null
  },
  action) => {
  switch (action.type) {
    case FETCH_PLANET:
      return [
        ...state,
        fetch_done:true
      ]
    case CALL_FETCH_PLANET_REJECTED:
      return [
        ...state,
        error: action.payload
      ]
    default:
      return state
  }
}

export default planet
