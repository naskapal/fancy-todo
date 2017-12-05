<template lang="html">
  <form>
    <div class="whitespace-medium"></div>
    <div class="form-group row">
      <label for="username" class="col-sm-2 col-form-label col-md-offset-2">Username</label>
      <input type="text" class="form-control-plaintext col-sm-5" v-model="username">
    </div>
    <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label col-md-offset-2">password</label>
      <input type="password" class="form-control-plaintext col-sm-5" v-model="password">
      <button type="button" class="btn btn-secondary" name="button" @click="submitRegister">Register</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    submitRegister () {
      this.register({
        username: this.username,
        password: this.password
      })
      // this.username = '',
      // this.password = ''
    }
  }
}
</script>

<style lang="css">
</style>
