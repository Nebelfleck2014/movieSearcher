import firebase from 'firebase/app'

export default {
  namespaced: true,
  state: {
    favoritesMovies: []
  },
  actions: {
    async addToFavorites({dispatch, commit}, fvrMovie) {
      try {
        const uid = await dispatch('getUid')
          return await firebase.database().ref(`/users/${uid}/movies/`).push(fvrMovie)
      } catch (error) {
        throw error
      }
    },

    async getFavorite({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const movies = (await firebase.database().ref(`/users/${uid}/movies/`).once('value')).val() || {}
      const data = Object.keys(movies).map(key => ({...movies[key], key}))
      commit('putFavorites', data)
    },

    async removeFavorite({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid') //для каждого пользователя создаются свои категории
        await firebase.database().ref(`/users/${uid}/movies/${id}`).remove() //удаляем фильм
      } catch (e) {
        throw e
    }
    },
    getUid() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		},
  },
  mutations: {
    putFavorites: (state, data) => state.favoritesMovies = data 
  }
}