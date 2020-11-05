/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-05 10:36:56
 * @,@LastEditTime: ,: 2020-11-05 14:51:12
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \goods\projectName\src\router\index.js
 */
import {createRouter, createWebHashHistory} from 'vue-router'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
      {
        path:'/todo',
        component: () => import('./views/todo.vue')
      }
  ]
})

