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
  	}

  ]
})
