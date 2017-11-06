<template>
  <div class="card">
    <section id="movie_showing">
      <header>
        <h2>影院热映</h2>
        <router-link to="/theatres">更多</router-link>
      </header>
      <div>
        <ul class="row items">
          <li v-for="(item,index) in myData" class="item item__movie item__movie1">
            <router-link :to="'movie/subject/' + item.id">
              <img :src="item['images']['small']" class="item-poster">
              <span class="item-title">{{item['title']}}</span>
              <div class="item-rating">
                <div class="rank">
                  <span class="rating-stars" v-if="item.rating.average!==0">
                    <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.stars/10)"></span>
                    <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-item.rating.stars/10)"></span>
                    <span>{{item['rating']['average']}}</span>
                  </span>
                  <span v-else="item.rating.average===0">暂无评分</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section id="movie_free_stream">
      <header>
        <h2>免费在线观影</h2>
        <router-link to="/theatres">更多</router-link>
      </header>
      <div>
        <ul class="row items">
          <li v-for="(item,index) in myData"  class="item item__movie item__movie1">
            <router-link :to="'movie/subject/' + item.id">
              <img :src="item['images']['small']" class="item-poster">
              <span class="item-title">{{item['title']}}</span>
              <div class="item-rating">
                <div class="rank">
                  <span class="rating-stars" v-if="item.rating.average!==0">
                    <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.stars/10)"></span>
                    <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-item.rating.stars/10)"></span>
                    <span>{{item['rating']['average']}}</span>
                  </span>
                  <span v-else="item.rating.average===0">暂无评分</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section id="movie_latest">
      <header>
        <h2>新片速递</h2>
        <router-link to="/theatres">更多</router-link>
      </header>
      <div>
        <ul class="row items">
          <li  v-for="(item,index) in myNewDate"  class="item item__movie item__movie1">
            <router-link :to="'movie/subject/' + item.id">
              <img :src="item['images']['small']" class="item-poster">
              <span class="item-title">{{item['title']}}</span>
              <div class="item-rating">
                <div class="rank">
                  <span class="rating-stars" v-if="item.rating.average!==0">
                    <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(item.rating.stars/10)"></span>
                    <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-item.rating.stars/10)"></span>
                    <span>{{item['rating']['average']}}</span>
                  </span>
                  <span v-else="item.rating.average===0">暂无评分</span>
                </div>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
    </section>
    <section class="interests">
      <header>
        <h2>发现好电影</h2>
      </header>
      <div class="swiper-container swiper-container-horizontal swiper-container-free-mode">
        <ul>
          <li class="item item__movie" style="border-color: #3BA94D;">
            <a href="https://m.douban.com/doulist/968362/">同时入选IMDB250和豆瓣电影250的电影</a>
          </li>
          <li class="item item__movie" style="border-color: #FF4055;">
            <a href="https://m.douban.com/doulist/16002/" style="color: #FF4055;">带你进入不正常的世界</a>
          </li>
          <li class="item item__movie" style="border-color: #4F9DED;">
            <a href="https://m.douban.com/doulist/190343/" style="color: #4F9DED;">用电【影】来祭奠逝去的岁月</a>
          </li>
          <li class="item item__movie" style="border-color: #FFAC2D;">
            <a href="https://m.douban.com/doulist/1125971/" style="color: #FFAC2D;">女孩们的故事【电影】</a>
          </li>
          <br>
          <li class="line"></li>
          <li class="item item__movie swiper-slide swiper-slide-next" style="border-color: #42BD56;">
            <a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=movie&channel=card_find_movie&uri=%2Fmovie%2Ftag" style="color: #42BD56;">
              使用 App 【找电影】功能
            </a>
          </li>
          <li class="item item__movie swiper-slide swiper-slide-next" style="border-color: #42BD56;">
            <a href="https://m.douban.com/doulist/4253902/" style="color: #42BD56;">
              科幻是未来的钥匙——科幻启示录【科幻题材】
            </a>
          </li>
          <li class="item item__movie swiper-slide swiper-slide-next" style="border-color: #CC3344;">
            <a href="https://m.douban.com/doulist/121326/" style="color: #CC3344;">
              美国生活面面观
            </a>
          </li>
          <li class="item item__movie swiper-slide swiper-slide-next" style="border-color: #2384E8;">
            <a href="https://m.douban.com/doulist/37479562/" style="color: #2384E8;">
              2015终极期待
            </a>
          </li>
          <li class="item item__movie swiper-slide swiper-slide-next" style="border-color: #3BA94D;">
            <a href="https://m.douban.com/doulist/458087/" style="color: #3BA94D;">
              经典韩国电影——收集100部
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="types">
      <header>
        <h2>分类浏览</h2>
      </header>
      <div class="section-content">
        <ul class="type-list">
          <li>
            <a href="#">经典</a>
            <span></span>
          </li>
          <li>
            <a href="#">冷门佳片</a>
            <span></span>
          </li>
          <li>
            <a href="#">豆瓣高分</a>
            <span></span>
          </li>
          <li>
            <a href="#">经典</a>
            <span></span>
          </li>
          <li>
            <a href="#">动作</a>
            <span></span>
          </li>
          <li>
            <a href="#">喜剧</a>
            <span></span>
          </li>
          <li>
            <a href="#">爱情</a>
            <span></span>
          </li>
          <li>
            <a href="#">悬疑</a>
            <span></span>
          </li>
          <li>
            <a href="#">恐怖</a>
            <span></span>
          </li>
          <li>
            <a href="#">科幻</a>
            <span></span>
          </li>
          <li>
            <a href="#">治愈</a>
            <span></span>
          </li>
          <li>
            <a href="#">文艺</a>
            <span></span>
          </li>
          <li>
            <a href="#">成长</a>
            <span></span>
          </li>
          <li>
            <a href="#">动画</a>
            <span></span>
          </li>
          <li>
            <a href="#">华语</a>
            <span></span>
          </li>
          <li>
            <a href="#">欧美</a>
            <span></span>
          </li>
          <li>
            <a href="#">韩国</a>
            <span></span>
          </li>
          <li>
            <a href="#">日本</a>
            <span></span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
  import { getMovie } from '@/common/js/getMovie/getMovie.js'
  export default {
    data () {
      return {
        myData: [],
        myNewDate: [],
        myFreeDate: [],
        myDateId: [],
        start: '',
        v1: ''
      }
    },
    created () {
      this.show()
      this.newMovie()
      this.newFreeMovie()
    },
    methods: {
      show: function () {
        let eachMovie = 'v2/movie/in_theaters'
        let obj = this
        getMovie(eachMovie, obj, {
          params: {
            'start': 0,
            'count': 8
          }
        }).then(function (data) {
          this.myData = data.body.subjects
          console.log(this.myData)
        })
      },
      newMovie: function () {
        // 即将上映
        let eachMovie = 'v2/movie/coming_soon'
        let obj = this
        getMovie(eachMovie, obj, {
          params: {
            'start': 0,
            'count': 8
          }
        }).then(function (data) {
          this.myNewDate = data.body.subjects
        })
      },
      newFreeMovie: function () {
        // 即将上映
        let eachMovie = 'v2/movie/coming_soon'
        let obj = this
        getMovie(eachMovie, obj, {

        }).then(function (data) {
          this.myFreeDate = data.body.subjects
        })
      }
    },
    watch: {
      // 检测路由信息的变化，重新发送请求
      $route: function () {
        this.show()
        this.newMovie()
        this.newFreeMovie()
      }
    }
  }
</script>

