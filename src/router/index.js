import Vue from 'vue'
import Router from 'vue-router'
import mySearch from '@/components/my_search/my_search'
import myBook from '@/components/my_book/my_book'
import myMusic from '@/components/my_music/my_music'
import myMovie from '@/components/my_movie/my_movie'
import myCity from '@/components/my_city/my_city'
import movieList from '@/components/my_movie/my_movieList'
import theatres from '@/components/my_movie/theatres'
import doReg from '@/components/doReg/doReg'
import toLogin from '@/components/doReg/toLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: mySearch
    },
    {
      path: '/book',
      component: myBook
    }, {
      path: '/music',
      component: myMusic
    }, {
      path: '/movie',
      component: myMovie
    },
    {
      path: '/theatres',
      component: theatres
    },
    {
      path: '/movie/subject/:id',
      component: movieList
    },
    {
      path: '/city',
      component: myCity
    },
    {
      path: '/toReg',
      component: doReg
    },
    {
      path: '/toLogin',
      component: toLogin
    },
    {
      path: '/*',
      component: myMovie
    }
  ]
})
