<template>
  <div id="app">
    <h1 style="margin-left:10px">影院热映</h1>
    <section id="list" class="grid">
      <router-link :to="'movie/subject/' + item.id" class="item" v-for="(item,index) in myData" :key="index">
        <div class="cover">
          <div class="wp ratio3_4">
            <img :src="item['images']['small']" class="img-show" style="width: 100%;">
          </div>
        </div>
        <div class="info">
          <h3>{{item['title']}} </h3>
          <div class="rank">
            <span class="rating-stars" v-if="item.rating.average!==0">
              <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.stars/10)"></span>
              <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-item.rating.stars/10)"></span>
              <span>{{item['rating']['average']}}</span>
            </span>
            <span v-else="item.rating.average===0">暂无评分</span>
          </div>
          </p>
        </div>
      </router-link>
    </section>
  </div>
</template>
<script>
  import { getMovie } from '@/common/js/getMovie/getMovie.js'
  export default {
    data () {
      return {
        myData: ''
      }
    },
    created () {
      this.show()
    },
    methods: {
      show: function () {
        let params = {
          'total': 39,
          'start': 0,
          'subjects': ['movie']
        }
        let eachMovie = 'v2/movie/in_theaters'
        let obj = this
        getMovie(eachMovie, obj, params).then(function (data) {
          this.myData = data.body.subjects
        })
      }
    }
  }
</script>
