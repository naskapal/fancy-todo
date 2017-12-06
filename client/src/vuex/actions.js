import axios from 'axios'
import router from '../router'
const baseURL = 'http://localhost:3000'

const actions = {
  login ({ commit }, payload) {
    axios.post(baseURL + '/users/login', {
      username: payload.username,
      password: payload.password
    })
      .then(token => {
        localStorage.setItem('token', token.data)
        commit('setToken', token.data)
        router.push({
          name: 'todos'
        })
      })
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
    commit('sortTodos', payload)
    axios.put(baseURL + '/todos', {
      id: payload
    })
      .then(success => console.log(success))
      .catch(error => console.log(error))
  },
  createTask ({ commit }, payload) {
    console.log(baseURL + '/todos')
    axios.post(baseURL + '/todos', {
      token: localStorage.getItem('token'),
      task: payload.task
    })
      .then(success => {
        console.log(success)
        commit('addTask', success.data)
        commit('sortTodos', success.data)
      })
      .catch(error => console.log(error))
  },
  getTodoList ({commit}, payload) {
    axios.get(baseURL + '/todos', {
      headers: {
        token: payload
      }})
      .then(todos => commit('sortTodos', todos.data))
      .catch(error => console.log(error))
  }
}

export default actions
