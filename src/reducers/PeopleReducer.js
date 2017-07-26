import {
  FETCH_PEOPLE,
  RECEIVE_PEOPLE,
  CALL_FETCH_PEOPLE_REJECTED
} from '../actions/FetchPeopleAction'

const peopleList = (
  state={
      people_list:{},
      isFetching: false,
      error: null
  },
  action) => {
    
  switch (action.type) {

    case 'FETCH_PEOPLE':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_PEOPLE':
      return Object.assign({}, state, {
        isFetching: false,
        people_list: action.people_list
      })
    default:
      return state
  }
}

export default peopleList
