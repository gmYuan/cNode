import Vue from 'vue'
import Router from 'vue-router'

import postList from '../components/postList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SliderBar from '../components/SliderBar'

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
  		path: '/topic/:postid&author=:name',
  		components: {
  		  main: Article,
        sliderBar: SliderBar
  		}
  	},
    {
      name: 'userInfo',
      path: '/user/:userName',
      components: {
        main: UserInfo
      }
    }


  ]
})
