<template>
  <main>
    <sp-header></sp-header>
    <router-view></router-view>
    <sp-footer></sp-footer>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil|Roboto');
@import './scss/normalize';
@import './scss/config';
@import './scss/core';
</style>
