<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <router-link to="/">首页</router-link>
        </li>
        <li class="home">
          <router-link to="/package">锂电池组装</router-link>
        </li>
        <li class="home">
          <router-link to="/weld">锂电池焊接</router-link>
        </li>
        <li class="home">
          <router-link to="/disassemble">锂电池拆解</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;
  height: 115px;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 115px; /* 调整高度 */
      width: 100%;
      background: url("@/assets/images/logo.png") no-repeat center center / contain;
    }
  }

  .app-header-nav {
    max-width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 90px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: #808080;
          border-bottom: 1px solid #808080;
        }
      }

      .active {
        color: #808080;
        border-bottom: 1px solid #808080;
      }
    }
  }
}
</style>