//createRouter: 创建router实例对象
//createWebHistory: 创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Index.vue'
import Home from '@/views/Home/Index.vue'
import Package from '@/views/Package/Index.vue'
import Weld from '@/views/Weld/Index.vue'
import Disassemble from '@/views/Disassemble/Index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component之间的映射关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/package',
          component: Package
        },
        {
          path: '/weld',
          component: Weld
        },
        {
          path: '/disassemble',
          component: Disassemble
        },
      ]
    },
  
  ]
})

export default router
