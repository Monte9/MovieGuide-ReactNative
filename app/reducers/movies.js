import {
  SAVE_MOVIES,
  SET_SELECTED_TAB
} from '../actions/movies'

import { INITIAL_STATE } from '../root/initial_state'

import saveMovies from './movies/save_movies'
import setSelectedTab from './movies/set_selected_tab'

export default function( state = {}, action ) {
  // console.log("0----")
  // console.log(state)
  // console.log("now it's changing to initial state")
  // console.log(INITIAL_STATE)
  // console.log(action)
  // console.log("----000")

  switch( action.type ) {
    case SAVE_MOVIES:
      console.log(saveMovies( state, action ))
      console.log("THIS GUY sayeeee")
      return saveMovies( state, action )
    case SET_SELECTED_TAB:
      console.log(setSelectedTab( state, action ))
      console.log("THIS GUY")
      return setSelectedTab( state, action )
    default:
      return state
  }
}
