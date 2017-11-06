<template>
  <div class="wrapper">
    <div class="header">
      <span class="title">取消</span>
    </div>

    <h1><a href="javascript:history.go(-1);">取消</a>登录豆瓣</h1>
    <div class="mobile-accounts">

      <form method="post" action="https://www.baidu.com/" @submit.prevent="doLogin">
        <div class="form-element form-element-first">
          <label>
            <strong>帐号</strong>
            <input type="text" name="form_email" placeholder="邮箱 / 手机号 / 用户名" value="" v-model.trim="username">
          </label>
        </div>
        <div class="form-element form-pwd">
          <label>
            <strong>请输入密码</strong>
            <input type="password" name="form_password" id="form_password" placeholder="密码" v-model.trim="password">
            <span :class="{ error:!active,success:active}">{{useCon}}</span>
          </label>
        </div>
        <div class="form-element hide">
          <input id="remember" type="checkbox" name="remember" checked="">
          <label for="remember">下次自动登录</label>
        </div>

        <div class="form-element submit-button">
          <input class="btn-submit" type="submit" value="登录" @click="useClick">
        </div>
      </form>
      <div class="item item-3rd">
        <div class="more-login-btn">使用其他方式登录 &amp; 找回密码</div>

        <div class="btn-wrapper">
          <router-link  to="/toReg" class="reg-btn" style="float:left">
            注册豆瓣帐号
          </router-link>
          <a class="open-app" style="float:right;margin-right:20px">下载豆瓣App</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//  import { getSession } from '@/assets/session.js'
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
      localStorage.getItem('neirong')
      this.username = JSON.parse(localStorage.getItem('neirong')).username
      this.password = JSON.parse(localStorage.getItem('neirong')).password
    },
    methods: {
      doLogin () {
        if (!(this.showLogin || this.showRegister)) {
          return false
        }
      },
      useClick () {
        if (this.username === '' || this.password === '') {
          this.useCon = '用户名或者密码不能为空'
        } else {
          let use = JSON.parse(localStorage.getItem('neirong')).username
          let pwd = JSON.parse(localStorage.getItem('neirong')).password
          if (this.username === use && this.password === pwd) {
            this.useCon = '可以提交'
            this.active = true
            this.showLogin = true
            this.showRegister = true
            this.$router.push({
              path: '/movie'
            })
          } else {
            this.useCon = '不可以提交'
          }
        }
      }
    }
  }
</script>
<style>

</style>
