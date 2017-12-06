<template lang="html">
  <div class="container">
    <div class="row">
      <div class="pending">
        <div class="col-6">
          PENDING
          <todo-item v-for="(todo, index) in todosPending" :key="index" :todo="todo"/>
        </div>
      </div>
      <div class="completed">
        <div class="col-6">
          COMPLETED
          <todo-item v-for="(todo, index) in todosCompleted" :key="index" :todo="todo"/>
        </div>
      </div>
    </div>
    <todo-create/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TodoComponent from '@/components/Todo'
import TodoCreate from '@/components/TodoCreate'

export default {
  components: {
    'todo-item': TodoComponent,
    'todo-create': TodoCreate
  },
  methods: {
    ...mapActions([
      'getTodoList'
    ])
  },
  computed: {
    ...mapState([
      'todosPending',
      'todosCompleted',
      'userToken'
    ])
  },
  mounted () {
    this.getTodoList(this.userToken)
  }
}
</script>

<style lang="css">
</style>
