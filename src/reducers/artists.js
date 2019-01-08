import { ADD_ARTIST } from '../actions/artists'

const initialState = [
  { id: 1, name: 'Drake', genre: 'hip-hop' },
  { id: 2, name: 'Fugees', genre: 'hip-hop' },
  { id: 3, name: 'A Tribe Called Quest', genre: 'hip-hop' }
]

function artists(state = initialState, actions) {
  switch(actions.type){
   default:
    return state
  }
}

export default artists