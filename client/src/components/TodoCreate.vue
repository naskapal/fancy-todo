<template lang="html">
  <div class="TodoAdd">
    <input type="text" v-model="task">
    <button type="button" name="button" @click="todoSubmit">Add</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      task: ''
    }
  },
  computed: {
    ...mapState([
      'userToken'
    ])
  },
  methods: {
    todoSubmit () {
      this.createTask({
        task: this.task,
        token: this.userToken
      })
    },
    ...mapActions([
      'createTask'
    ])
  }
}
</script>

<style lang="css">
</style>
