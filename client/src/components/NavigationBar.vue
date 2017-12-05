<template lang="html">
  <div class="col-12">
    <router-link :to="{ name: '' }">
      <div class="navbar-brand">Todo</div>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: '' }">
            <button type="button" class="btn btn-secondary">Home</button>
          </router-link>
        </li>
        <li>
        </li>
      </ul>
      <div class="float-right">
        <button class="btn btn-success" name="button">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLogin: false
    }
  }
}
</script>

<style lang="css">
</style>
