<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>

  </div>
</template>

<script>

import Header from './components/Header'
import PostList from './components/postList'
export default {
  name: 'App',
  components: {
    Header,
    PostList
  }
}
</script>


<style>

body,
ul,
ol {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
} 

a {
	color: inherit;
	text-decoration: none;
}

</style>
