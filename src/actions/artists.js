export const ADD_ARTIST = 'ADD_ARTIST'

export function removeArtist(delArtist) {
  return {
    type: ADD_ARTIST,
    payload: delArtist
  }
}