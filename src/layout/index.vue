<template>
  <div class="app__layout">
    <nav class="layout__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="scss">
.app__layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .layout__nav {
    padding: 4px 16px;
    height: 64px;
    line-height: 64px;
    box-sizing: border-box;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    background-color: aqua;
    flex-shrink: 0;
  }
  .page {
    flex: 1;
    overflow: auto;
  }
}
</style>
