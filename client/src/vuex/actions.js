import axios from 'axios'

const baseURL = 'http://localhost:3000'

const actions = {
  login ({ commit }, payload) {
    axios.post(baseURL + '/users/login', {
      username: payload.username,
      password: payload.password
    })
      .then(token => commit('setToken', token.data))
      .catch(error => console.log(error))
  },
  register ({commit}, payload) {
    axios.post(baseURL + '/users/register', {
      username: payload.username,
      password: payload.password
    })
      .then(success => {
        console.log(success)
        // commit('register')
      })
      .catch(error => console.log(error))
  },
  updateTask ({commit}, payload) {
    commit('updateTodo', payload)
    axios.put(baseURL + '/todos', {
      id: payload
    })
      .then(success => console.log(success))
      .catch(error => console.log(error))
  },
  createTask ({})
}

export default actions
