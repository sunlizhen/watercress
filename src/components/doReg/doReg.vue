<template>
  <div id="content">
    <div>
      <div>
        <div class="content"><span></span>
          <h1 class="welcome center">欢迎加入豆瓣</h1>
          <form action="#" @submit.prevent="doLogin">
            <div class="input" id="getInput">
              <input name="alias" type="text" value=""  placeholder="手机号 / 邮箱" v-model.trim="username"></div>
            <div class="password-input input">
              <input type="password" name="pass" value="" placeholder="密码 (最少6位)" v-model.trim="password">
            </div>
            <span :class="{ 'error': active , 'success': !active}">{{useCon}}</span>
            <div class="opt-area">
              <button class="btn " @click="useclick">注册</button>
            </div>
          </form>

        </div>
        <router-link to="/toLogin">登录</router-link>
        <a class="open-app">下载豆瓣App</a></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showLogin: false,
        showRegister: false,
        active: false,
        useCon: '',
        pwdCon: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: ''
      }
    },
    created () {
      let use = JSON.parse(localStorage.getItem('neirong')).username
      let pwd = JSON.parse(localStorage.getItem('neirong')).password
      if (use && pwd) {
        this.username = use
        this.password = pwd
        this.useCon = ' 已有账号，可以直接登录'
      }
    },
    methods: {
      doLogin () {
        if (!(this.showLogin || this.showRegister)) {
          return false
        }
      },
      useclick () {
        let data = {username: this.username, password: this.password}
        if (this.username === '' || this.password === '') {
          this.useCon = '请填写手机号和密码'
        } else {
          // 将数据存数在Session
          localStorage.setItem('neirong', JSON.stringify(data))
          this.$router.push({
            path: '/toLogin'
          })
          this.active = true
          this.showLogin = true
          this.showRegister = true
        }
      }
    }
  }
</script>
<style>
  .btn{
    font-size: 16px;
    border-radius: 3px;
    border: 0 none;
    background: #42bd56;
    display: block;
    width: 100%;
    height: 44px;
    color: #fff;
    -webkit-user-select: none;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
</style>

