<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <navbar/>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/NavigationBar'
export default {
  components: {
    navbar: navbar
  },
  name: 'app'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.html {
  margin: 0px
}
.whitespace-small {
  margin: 8px
}
.whitespace-medium {
  margin: 16px
}
.whitespace-large {
  margin: 24px
}
.whitespace-jumbo {
  margin: 32px
}
</style>
