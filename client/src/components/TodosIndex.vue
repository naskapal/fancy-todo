<template lang="html">
  <div class="container">
    <div class="row">
      <div class="completed">
        <todo-item v-for="(todo, index) in todosCompleted" :key="index" :todo="todo"/>
      </div>
      <div class="pending">
        <todo-item v-for="(todo, index) in todosCompleted" :key="index" :todo="todo"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import TodoComponent from '@/components/Todo'
export default {
  components: {
    'todo-item': TodoComponent
  },
  methods () {
    ...mapActions([
      'getTodoList'
    ])
  }
  computed () {
    ...mapState([
      'todos'
    ])
  },
  mounted () {
    this.getTodoList()
  }
  
}
</script>

<style lang="css">
</style>
