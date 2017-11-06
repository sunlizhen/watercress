<template>
  <div class="search">
    <header class="search-hd" style="position: static;">
      <form action="#" method="get" id="search_form">
        <input type="text" name="query" placeholder="搜索 书 / 影 / 音 / 标签" vaule="" v-model="name">
        <a href="javascript:void(0)" class="button-search" id="button-search" @click="search">搜索</a>
      </form>
    </header>
    <div class="search-bd">
      <ul class="search-results">
        <li class="search-module">
          <span class="search-results-modules-name">读书</span>
          <ul>
            <li v-for="item in myData" style="overflow:hidden">
              <router-link :to="'movie/subject/' + item.id">
                <img :src="item.image">
              </router-link>
              <div class="subject-info">
                <span class="subject-title">{{item.title}}</span>
                <p class="rating">
                  <span class="rating-stars" v-if="item.rating.average!==0">
                    <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.average/2)"></span>
                    <span class="rating-star rating-star-small-gray" v-for="item2 in 5-Math.floor(item.rating.average/2)"></span>
                    <span>{{item['rating']['average']}}</span>
                   </span>
                  <span v-else="item.rating.average===0">暂无评分</span>
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { getMovie } from '@/common/js/getMovie/getMovie.js'
  export default {
    data () {
      return {
        name: '', // 搜索框内容
        myData: []
      }
    },
    created () {
      this.name = '水浒传'
      this.search()
    },
    methods: {
      search: function () {
        let eachMovie = 'v2/book/search?q=' + this.name
        let obj = this
        getMovie(eachMovie, obj).then(function (data) {
          this.myData = data.body.books
        })
        this.$router.push({
          path: '/book'
        })
      }
    }
  }
</script>
