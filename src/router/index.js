import Vue from 'vue'
import Router from 'vue-router'

import postList from '../components/postList'
import Article from '../components/Article'

let vueVueConstructor = Vue.use(Router);

export default new Router({
  routes: [
  	{
  		name: 'root',
  		path: '/',
  		component: postList
  	},
  	{
  		name: 'article',
  		path: '/topic/:postid',
  		component: Article
  	}

  ]
})
