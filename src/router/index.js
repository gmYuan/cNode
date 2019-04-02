import Vue from 'vue'
import Router from 'vue-router'

import postList from '../components/postList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'

let vueVueConstructor = Vue.use(Router);

export default new Router({
  routes: [
  	{
  		name: 'root',
  		path: '/',
  		components: {
  		  main: postList
      }
  	},
  	{
  		name: 'article',
  		path: '/topic/:postid',
  		components: {
  		  main: Article
  		}
  	},
    {
      name: 'userInfo',
      path: '/user/:user',
      components: {
        main: UserInfo
      }
    }

  ]
})
