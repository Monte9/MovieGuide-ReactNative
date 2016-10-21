export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB'

export function saveMovies( endpoint, movies ) {
  return {
    type: SAVE_MOVIES,
    endpoint,
    movies
  }
}

export function setSelectedTab( tab_name ) {
  return {
    type: SET_SELECTED_TAB,
    tab_name
  }
}
