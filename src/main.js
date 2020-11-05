/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-05 08:52:22
 * @,@LastEditTime: ,: 2020-11-05 14:27:42
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \goods\projectName\src\main.js
 */
import { createApp,version } from 'vue'
console.log(version);
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'  //引入路由的配置
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'
//链式调用
createApp(App).use(router).use(store).use(Antd).mount('#app')
