import { combineReducers } from 'redux'
import PeopleReducer from './PeopleReducer'
import PlanetReducer from './PlanetReducer'

const peopleApp = combineReducers({
  PeopleReducer,
  PlanetReducer
})

export default peopleApp
