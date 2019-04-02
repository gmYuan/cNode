<template>
  <div>
    <!--loading动画部分-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    
    <!-- 个人中心校详情 -->
    <main class="user-main">

      <!-- 2.1 主体内容部分 -->
      <div class="content">

        <!-- 个人主体信息部分 -->
        <section class="wrap">
          <div class="header">
            <ul class="breadcrumb">
              <li>
                <a href="/">主页</a>
                <span class="divider">/</span>
              </li>
            </ul>
          </div>

          <div class="user-info"></div>
          
        </section>


      </div>

      <!-- 2.2 aside部分 -->

    </main>
    
  </div>
</template>

<script>

export default {
  name: "UserInfo",

}

</script>

<style scoped>

/ * reset样式 */
body {
  margin: 0;
 
  color: #333;
  font-size: 14px;
  line-height: 20px;
  word-break: break-word;
   font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}


/ * 公有样式 */
.user-main {
  margin: 15px auto;
  max-width: 1400px;
  min-width: 960px;
  min-height: 400px;
}

.content {
  margin-right: 305px;
}

/* 个人中心组建内容  */
.wrap {
  margin-bottom: 13px;
  border-radius: 3px;
}
.header {
  padding: 10px;
  min-height: 20px;
  background-color: #f6f6f6;
  outline: 1px solid red;
}


</style>
