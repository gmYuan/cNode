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
          <div class="user-info">
            <div class="avatar">
              <img src="../assets/aur.jpg" alt="个人信息">
              <span class="text">lisniuse</span>
            </div>
            <div class="account-info">
              <ul>
                <li>
                  <span class="points">130</span>
                  <span>积分</span>
                </li>
                <li>
                  <i class="github"></i>
                  <a href="javascript:;" class="text">
                    @lisniuse
                  </a>
                </li>
              </ul>
            </div>
            <div class="account-time">
              注册时间 2 年前
            </div>
          </div>
        </section>

        <!--最近创建的话题部分-->


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

/* reset样式 */
body {
  margin: 0;
 
  color: #333;
  font-size: 14px;
  line-height: 20px;
  word-break: break-word;
   font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}


/* 公有样式 */
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
  background-color: #f6f6f6;
}

.breadcrumb li a {
  color: #80bd01;
}

.breadcrumb li .divider {
  padding: 0 5px;
  color: #ccc;
}
.user-info {
  padding: 10px;
  line-height: 2em;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
}
.avatar img{
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  vertical-align: top;
  margin-right: 8px;
}
.text {
  color: #778087;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
}
.account-info {
  margin-top: 20px;
  margin-bottom: 10px;
}
.points {
  font-size: 14px;
}
.github {
  display: inline-block;
  background: url("../assets/github.svg") no-repeat;
  background-size: contain;
  margin-left: 4px;
  width: 1.28571429em;
  min-height: 20px;
  text-align: center;
  vertical-align: -15%;
  opacity: .4;
}
.github:hover {
  opacity: .7;
}
.account-time {
  color: #ababab;
  margin: 0 0 10px;
}

</style>
