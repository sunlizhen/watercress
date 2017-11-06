<template>
  <div class="search">
    <header class="search-hd" style="position: static;">
      <form action="#" method="get" id="search_form">
        <input type="text" name="query" placeholder="唱片名、表演者、条码、ISRC" vaule="" v-model="name">
        <a href="javascript:void(0)" class="button-search" id="button-search" @click="search">搜索</a>
      </form>
    </header>
    <div class="search-bd">
      <ul class="search-results" style="font-size:14px">
        <li class="search-module">
          <span class="search-results-modules-name" style="font-size:18px">搜索 {{name}}</span>
          <ul>
            <li v-for="item in myData" style="overflow:hidden;font-size:12px">
              <router-link :to="'music/subject/' + item.id">
                <img :src="item.image" style="width:80px;max-height:120px">
              </router-link>
              <div class="subject-info">
                <span class="subject-title" style="font-size:14px">{{item.title}}</span>
                <p class="rating" style="margin-top:10px">
                  <span class="rating-stars">
												<span class="rating-stars" v-if="item.rating.average!==0">
                    <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.average/2)"></span>
                    <span class="rating-star rating-star-small-gray" v-for="item2 in 5-Math.floor(item.rating.average/2)"></span>
                    <span>{{item['rating']['average']}}</span>
                   </span>
                  <span v-else="item.rating.average===0">暂无评分</span>
                        <span style="font-size:14px"">({{item.rating.numRaters}})人评价</span>
									</span>
                </p>
                <p style="font-size:14px;color:#666;margin-top:10px"  v-for="item1 in item.attrs.pubdate">{{item.author[0].name}}/{{item1}}</p>
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
      this.name = '凡人歌'
      this.search()
    },
    methods: {
      search: function () {
        let eachMovie = 'v2/music/search?q=' + this.name
        let obj = this
        getMovie(eachMovie, obj).then(function (data) {
          this.myData = data.body.musics
        })
        this.$router.push({
          path: '/music'
        })
      }
    }
  }
</script>
