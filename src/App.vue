<template>
  <div id="app">
    <h2>Ready to check</h2>

    <!--С помощью v-colored можно менять стили : v-colored:background="'red'" -->
    <!--В ripple можно передать пропс color, который меняет цвет эффекта : color="rgba(250,150,0,0.7)" -->

    <ripple title="dddd" color="rgba(237, 199, 28, 0.5)" v-colored class="btn">
      <div>Click me</div>
    </ripple>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
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
