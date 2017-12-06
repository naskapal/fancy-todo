<template lang="html">
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {{ todo.task }}
        <span>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" @change="updateStatus" v-model="todo.isComplete">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description"> Status </span>
          </label>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['todo'],
  methods: {
    ...mapActions([
      'updateTask'
    ]),
    updateStatus () {
      this.updateTask(this.todo.id)
    }
  }
}
</script>

<style lang="css">
</style>
