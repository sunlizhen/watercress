<template>
  <div id="app">
      <my-nav></my-nav>
    <div class="page">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import myNav from '@/components/my_nav/my_nav'
  import mySearch from '@/components/my_search/my_search'
  export default {
    components: {
      myNav,
      mySearch
    }
  }
</script>

<style>
  @import '../static/bootstrap/css/bootstrap.min.css';
  @import '../static/css/reset.css';
  @import '../static/css/index.css';
  @import '../static/css/list.css';
</style>
