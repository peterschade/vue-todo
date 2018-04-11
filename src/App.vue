<template>
  <div id="app">
    <div class='ui centered grid'>
      <div class='twelve wide mobile eight wide tablet six wide computer column'>

        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  body {
    background: #fafafa;
  }
</style>
