<template>
  <div id="app">
    <h2>Ready to check</h2>
    <ripple
      title="dddd"
      color="rgba(255,152,0,0.7)"
      v-colored:background="''"
      class="btn"
    >
      <div>Click me</div>
    </ripple>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
