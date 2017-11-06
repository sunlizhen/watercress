<template>
    <div class="card">
      <h1 class="title">{{ myDate.title }}</h1>
      <section class="subject-info">
        <div class="right">
          <a href="#">
            <img :src="myDate.images.small" class="cover" alt="全球风暴">
          </a>
        </div>
        <div class="left">
          <div class="rating">
            <span class="rating-stars" v-if="myDate.rating.average!==0">
                <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(myDate.rating.stars/10)"></span>
                <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-myDate.rating.stars/10)"></span>
            </span>
            <span v-else="item.rating.average===0">暂无评分</span>
            <strong>{{myDate.rating.average}}</strong>
            <span>{{myDate.ratings_count}}人评价</span>
          </div>
          <div class="meta">
            109分钟 / {{myDate.genres[0]}} / {{myDate.genres[1]}} / {{myDate.genres[2]}} / 迪安·德夫林(导演) / 杰拉德·巴特勒 / 吉姆·斯特吉斯 / 艾比·考尼什 / 亚历山德拉·玛丽亚·拉娜 / 吴彦祖 / 欧赫尼奥·德尔维斯 / 阿马尔·维克德 / 阿德普波·奥杜耶 / 安迪·加西亚 / 艾德·哈里斯 / 罗伯特·希恩 / 理查德·希夫 / 梅尔·温宁汉姆 / 莎姬·贝兹 / 特丽莎·贝特曼 / 2017-10-27(中国大陆) 上映
          </div>
        </div>
      </section>
      <section class="subject-mark">
        <div class="mark-item">
          <a href="javascript:;"><span>想看</span></a>
          <a href="javascript:;"><span>看过</span></a>
        </div>
      </section>
      <a href="#" class="open-in-app-center">在 App 上保存你的观影足迹</a>
      <section class="subject-intro">
        <h2>{{ myDate.title }}的剧情简介</h2>
        <div class="bd" style="position: static;">
          <p>{{myDate.summary}}</p>
          <a href="javascript:;" class="expand" style="float:right;">(展开)</a>
        </div>
      </section>
      <section id="celebrities">
        <header><h2>影人</h2></header>
        <div class="section-content">
          <ul class="row items">
            <li class="item item__celebrity">
              <a :href="myDate.directors[0].alt">
                <div class="item-poster" :style="{backgroundImage: 'url('+ myDate.directors[0].avatars.small +')'}"></div>
                <span class="item-title name">{{myDate.directors[0].name}}</span>
                <span class="item-title role">导演</span>
              </a>
            </li>
            <li class="item item__celebrity" v-for="(item,index) in myDate.casts">
              <a :href="item.alt">
                <div class="item-poster" :style="{backgroundImage: 'url('+ item.avatars.small +')'}"></div>
                <span class="item-title name">{{item.name}}</span>
                <span class="item-title role">演员</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="tags">
        <p>查看更多豆瓣高分电影电视剧</p>
        <ul>
          <li><a href="#">灾难</a></li>
          <li><a href="#">科幻</a></li>
          <li><a href="#">美国</a></li>
          <li><a href="#">2017</a></li>
          <li><a href="#">气候</a></li>
          <li><a href="#">太空</a></li>
          <li><a href="#">动作</a></li>
          <li><a href="#">剧情</a></li>
        </ul>
      </section>
      <section class="subject-pics">
        <h2>{{ myDate.title }}的预告片(27)和图片(68)</h2>
        <div class="bd photo-list">
          <ul class="wx-preview">
            <li class="video" style ="background-image: url('https://img1.doubanio.com/img/trailer/medium/2443237899.jpg?');"></li>
            <li class="pic">
              <a href="#">
                <img src="https://img3.doubanio.com/view/photo/lthumb/public/p2499795410.webp">
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="subject-comments">
        <h2>{{ myDate.title }}的短评({{myDate.comments_count}})</h2>
        <div class="bd" id="comment-list">
          <ul class="list comment-list">
            <li>
              <div class="desc">
                <a href="/people/1105218/">
                  <img src="https://img3.doubanio.com/icon/up1105218-33.jpg">
                </a>
                <div class="user-info">
                  <strong>橙橙</strong>
                  <span class="rating-stars">
                    <span class="rating-star rating-star-medium-full"></span>
                    <span class="rating-star rating-star-medium-full"></span>
                    <span class="rating-star rating-star-medium-full"></span>
                    <span class="rating-star rating-star-medium-full"></span>
                    <span class="rating-star rating-star-medium-full"></span>
                  </span>
                  <div class="date">2017-10-21 09:43:10</div>
                </div>
              </div>
              <p>吴彦祖上次进军好莱坞是亮瞎眼的《魔兽》，现在终于有机会露脸了，希望男神过马路小心！感觉父女情、兄弟情和阴谋论比灾难特效好看。等爸爸回来的小萝莉负担太多！卫星风暴只能刮到香港，充分显示了社会主义的优越性。</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left ">
                  <span class="text">825</span>
                </div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="go-comment-list">
              <a href="#">查看全部短评</a>
            </li>

          </ul>
        </div>
      </section>
      <section class="subject-reviews">
        <h2>全球风暴的影评(175)</h2>
        <div class="bd">
          <ul class="list">
            <li>
              <a href="#"><h3>“{{ myDate.title }}”北美遇冷的一点思考</h3></a>
              <div>
                <span class="username">SELVEN</span>
                <span class="rating-stars" v-if="myDate.rating.average!==0">
                <span class="rating-star rating-star-small-full"  v-for="item1 in Math.floor(myDate.rating.stars/10)"></span>
                <span class="rating-star rating-star-small-gray" v-for="item2 in Math.floor(5-myDate.rating.stars/10)"></span>
            </span>
                <span v-else="item.rating.average===0">暂无评分</span>
                <p class="abstract">
                 在最新公布的北美周末票房排行榜上（10.22-24），“全球风暴”在3246馆开画的情况下只收获了 1371万美元，对于一部预算达到1.2亿美元的大制作来说，这个开画成绩可能比...
                </p>
                <div class="info">
                  204 有用
                </div>
              </div>
            </li>
            <li class="go-review-list">
              <a href="#">查看全部影评</a>
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
            <li class="item item__movie">
              <a href="https://m.douban.com/doulist/968362/">一个人看电视（二）</a>
            </li>
            <li class="item item__movie">
              <a href="https://m.douban.com/doulist/16002/">我心目中的经典日本动漫</a>
            </li>
            <li class="item item__movie">
              <a href="https://m.douban.com/doulist/190343/">追过的动漫&动画电影只是为了保存一下好么~~~~</a>
            </li>
            <li class="item item__movie">
              <a href="https://m.douban.com/doulist/1125971/">未来规划</a>
            </li>
            <br>
            <li class="line"></li>
            <li class="item item__movie swiper-slide swiper-slide-next">
              <a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=movie&channel=card_find_movie&uri=%2Fmovie%2Ftag">
                稻草快乐的动画时光2
              </a>
            </li>
            <li class="item item__movie swiper-slide swiper-slide-next">
              <a href="https://m.douban.com/doulist/4253902/">
                稻草快乐的动画时光2
              </a>
            </li>
            <li class="item item__movie swiper-slide swiper-slide-next">
              <a href="https://m.douban.com/doulist/121326/">
                日本非百合动漫
              </a>
            </li>
            <li class="item item__movie swiper-slide swiper-slide-next">
              <a href="https://m.douban.com/doulist/37479562/">
                漫天地
              </a>
            </li>
            <li class="item item__movie swiper-slide swiper-slide-next">
              <a href="https://m.douban.com/doulist/458087/">
                那些曾追过的动画
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
              <a href="/movie">返回电影首页</a>
              <span></span>
            </li>
            <li>
              <a href="#">豆瓣高分</a>
              <span></span>
            </li>
            <li>
              <a href="#">冷门佳片</a>
              <span></span>
            </li>
            <li>
              <a href="#">更多电影分类</a>
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
        myDate: ''
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
          'count': 8,
          'subjects': ['movie']
        }
        let eachMovie = 'v2/movie/subject/' + this.$route.params.id
        let obj = this
        getMovie(eachMovie, obj, params).then(function (data) {
          if (data.status === 200 && data) {
            this.myDate = data.body
            console.log(this.myDate)
          }
        })
      }
    },
    watch: {
      // 检测路由信息的变化，重新发送请求
      $route: function () {
        this.show()
      }
    }
  }
</script>
