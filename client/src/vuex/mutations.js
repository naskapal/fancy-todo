const mutations = {
  setToken (state, payload) {
    state.userToken = payload
  },
  updateTodo (state, payload) {
    // console.log(state.todos[0].id)
    // console.log(`TODO DI MUTATION   ${payload}`)
    // state.todos.forEach(todo => {
    //   if (todo.id === payload) {
    //     todo.isComplete = !todo.isComplete
    //   }
    // })
  },
  addTask (state, payload) {
    console.log(payload)
    state.todos.push({
      id: payload._id,
      author: payload.author,
      task: payload.task,
      isComplete: payload.isComplete
    })
  },
  sortTodos (state) {
    state.todosPending = state.todos.filter(todo => todo.isComplete === false)
    state.todosCompleted = state.todos.filter(todo => todo.isComplete === true)
  }
}

export default mutations
