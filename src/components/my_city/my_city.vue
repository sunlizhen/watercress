<template>
  <div class="card">
    <h1>同城活动</h1>
    <ul class="events-list events-list-pic100 events-list-psmall">
      <li style="overflow:hidden;margin-bottom:15px;" v-for="(item,index) in myData">
        <div class="pic">
          <router-link :to="item.url">
            <img :src="item.image">
          </router-link>
        </div>
        <div class="info">
          <div class="title">
            <router-link :to="item.url">
              <span style="color:#37a">{{item.title}}</span>
            </router-link>
          </div>
          <ul class="event-meta">
            <li class="event-time">{{item.time_str}}</li>
            <li>{{item.address}}</li>
            <li class="fee">价钱：{{item.price_range}}</li>
          </ul>
          <p class="counts">
            <span>{{item.participant_count}}人关注</span>
          </p>
        </div>
      </li>
    </ul>
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
        let eachMovie = 'v2/event/list'
        let obj = this
        getMovie(eachMovie, obj, {
          params: {
            'start': 0,
            'count': 8,
            'loc': 108288,
            'day_type': 'today',
            'type': 'all'
          }
        }).then(function (data) {
          this.myData = data.body.events
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

