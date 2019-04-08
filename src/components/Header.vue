<template>
  <header class="header">
  	<div class="inner-wrap">
  		<div class="logo-wrap">
				 <router-link :to="{name:'root'}">
            <span class="logo">
							<img src="../assets/cnodejs_light.svg" alt="logo">
						</span>
          </router-link>
  		</div>

			
  		<div class="lists">
  			<ul>
  				<li>
  					<a href="javascript:;">首页</a>
  				</li>

  				<li>
  					<a href="javascript:;">新手入门</a>
  				</li>

  				<li>
  					<a href="javascript:;">API</a>
  				</li>

  				<li>
  					<a href="javascript:;">关于</a>
  				</li>

  				<li>
  					<a href="javascript:;">注册</a>
  				</li>

  				<li>
  					<a href="javascript:;">登录</a>
  				</li>

  			</ul>
  		</div>
  	</div>
  </header>

</template>


<script>
export default {
  name: "Header"
}


</script>

<style scoped>

.header {
	width: 100%;

	background: #444;
	font-size: 13px;
	overflow: hidden;
}

.inner-wrap {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;

	margin: auto;
	padding: 5px;
	width: 90%;
  height: 40px;  
}

.logo-wrap{
	margin-left: -20px;
	padding: 3px 20px;
}

.logo{
	display: block;
	width: 120px;
  height: 34px;
  line-height: 34px;
  color: #ccc;
}

.logo img {
	display: block;
	max-width: 100%;
}


.lists ul{
	display: flex;
}

li {
	line-height: 20px;
	list-style: none;
}

.lists li a {
	display: block;
	padding: 10px 15px;
	color: #ccc;
	text-decoration: none;
}

.lists li a:hover {
	color: #fff;
}

</style>
