import React from 'react'
import { connect } from 'react-redux'
import { removeArtist } from '../actions/artists'

const ArtistList = ({ artists, dispatch }) => {
  const list = artists.map((artist, i) => {
    return <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={ i }>
        { artist.name }
        <section>
          <span className="badge badge-primary badge-pill">{ artist.genre }</span>
          <a className="badge badge-danger badge-pill text-white ml-2">Remove</a>
        </section>
      </li>
  })

  return <ul className="list-group">{ list }</ul>
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
