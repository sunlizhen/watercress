<template>
  <div id="TalionNav">
    <header>
      <div class="TalionNav-primary">
        <router-link to="/movie" style="vertical-align:middle">
          <h1></h1>
        </router-link>
        <nav>
          <ul>
            <li>
              <router-link to="/movie" style="color: #2384E8">电影</router-link>
            </li>
            <li>
              <router-link to="/book" style="color: #9F7860">图书</router-link>
            </li>
            <li>
              <router-link to="/city" style="color: #E4A813">同城</router-link>
            </li>
            <li>
              <router-link to="/music" style="color: #2AB8CC">音乐</router-link>
            </li>
          </ul>
          <span class="con_search"><router-link to="/search"></router-link></span>
        </nav>
      </div>
      <!--点击右边搜索出现的-->
     </header>
  </div>
</template>
<script>
</script>
<style></style>
