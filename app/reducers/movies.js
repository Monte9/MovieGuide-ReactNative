import {
  SAVE_MOVIES,
  SET_SELECTED_TAB
} from '../actions/movies'

import { INITIAL_STATE } from '../root/initial_state'

import saveMovies from './movies/save_movies'
import setSelectedTab from './movies/set_selected_tab'

export default function( state = INITIAL_STATE, action ) {
  switch( action.type ) {
    case SAVE_MOVIES:
      return saveMovies( state, action )
    case SET_SELECTED_TAB:
      return setSelectedTab( state, action )
    default:
      return state
  }
}
