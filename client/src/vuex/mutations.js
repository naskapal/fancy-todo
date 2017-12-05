const mutations = {
  setToken (state, payload) {
    state.userToken = payload
  },
  updateTodo (state, payload) {
    state.todos.forEach(todo => {
      if (todo.id === payload.id) {
        todo.isComplete = !todo.isComplete
      }
    })
  }
}

export default mutations
