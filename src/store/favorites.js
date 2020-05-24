import firebase from 'firebase/app'

export default {
  async addToFavorites({dispatch, commit}, fvrMovie) {
    try {
      const uid = await dispatch('getUid')
      const index = state.allMovies.findIndex(movie => movie.id === fvrMovie.id)
      if(index !== -1) {
        return await firebase.database().ref(`/users/${uid}/movies`).push(fvrMovie)
      }
    } catch (error) {
      throw e
    }
  },
}