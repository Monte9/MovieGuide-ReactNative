export default function( state, action ) {
  console.log("tab set")
  return Object.assign( {}, state, { selectedTab: action.tab_name } )
}
