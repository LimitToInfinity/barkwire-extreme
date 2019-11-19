<template>
  <div id="app">
    <header>
      <h1>BarkWire</h1>
      <nav>
        <router-link :to="{ name: 'protected' }">See a secret!</router-link>
      </nav>
      <button @click="toggleLogin">Toggle Login: {{isLoggedIn}}</button>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <small>&copy; 2019 BarkWire Inc.</small>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    toggleLogin() {
      this.$store.dispatch("toggleLogin")
    }
  }
}
</script>

<style lang="scss">
</style>
