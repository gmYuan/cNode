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
              <img :src="userinfo.avatar_url" alt="个人信息">
              <span class="text">{{userinfo.loginname}}</span>
            </div>
            <div class="account-info">
              <ul>
                <li class="points">
                  <span>{{userinfo.score}}</span>
                  <span>积分</span>
                </li>
                <li class="github-wrap">
                  <i class="github"></i>
                  <a class="text link" @click="goGithub(userinfo.githubUsername)">
                    @{{userinfo.githubUsername}}
                  </a>
                </li>
              </ul>
            </div>
            <div class="account-time">
              注册时间 {{userinfo.create_at | seetime}}
            </div>
          </div>
        </section>

        <!--最近创建的话题部分-->
        <section class="wrap">
          <div class="header">
            <span class="title">最近创建的话题</span>
          </div>
          <div class="cell" v-for="item in userinfo.recent_topics">
            <div class="pic-wrap">
              <a href="#">
                <img :src="item.author.avatar_url" alt="个人头像">
              </a>
            </div>
            <!-- 回复和浏览人数-->
            <!--<div class="scan-wrap">-->
              <!--<span class="review-count">{{getReplay(item.id)}}</span>-->
              <!--<span class="seperator">/</span>-->
              <!--<span class="scan-count">{{getVisit(item.id)}}</span>-->
            <!--</div>-->
            <div class="post-wrap">
              <router-link :to="{name:'article', params:{postid: item.id}}">
                 {{item.title}} 
              </router-link>
            </div>
            <div class="time-wrap">
              <a class="active-time">
                {{item.last_reply_at | seetime}}
              </a>
            </div>
          </div>
        </section>

        <!-- 最近参与的话题部分 -->
         <section class="wrap">
          <div class="header">
            <span class="title">最近参与的话题</span>
          </div>
          <div class="cell" v-for="item in userinfo.recent_replies">
            <div class="pic-wrap">
              <a href="#">
                <img :src="item.author.avatar_url" alt="个人头像">
              </a>
            </div>
            <!-- 回复和浏览人数-->
            <!--<div class="scan-wrap">-->
              <!--<span class="review-count">{{getReplay(item.id)}}</span>-->
              <!--<span class="seperator">/</span>-->
              <!--<span class="scan-count">{{getVisit(item.id)}}</span>-->
            <!--</div>-->
            <div class="post-wrap">
              <router-link :to="{name:'article', params:{postid: item.id}}">
                 {{item.title}} 
              </router-link>
            </div>
            <div class="time-wrap">
              <a class="active-time">
                {{item.last_reply_at | seetime}}
              </a>
            </div>
          </div>
        </section>


      </div>

      <!-- 2.2 aside部分 -->

    </main>
  </div>
</template>

<script>

export default {
  name: "UserInfo",
  data(){
    return {
      isLoading: false,
      userinfo: {}
    }
  },
  methods: {
    getData(){
      this.isLoading = false
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.userName}`)
      .then( (res) => {
        this.userinfo = res.data.data
      })
      .catch( (err) => {
        console.log(err)  
      })
    },
    goGithub(account){
       window.open(`https://github.com/${account}`,'_blank')
    },
    getReplay(id){
      let target = this.$store.state.allPosts.find( post => post.id === id)
      if (target != null){
        return target.reply_count
      } else {
        return 0
      }
    },
    getVisit(id){
      let target = this.$store.state.allPosts.find( post => post.id === id)
      if (target != null){
        return target.visit_count
      } else {
        return 0
      }
    }


  },
  beforeMount(){
    this.isLoading = true
    this.getData()
  }

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

.link {
  cursor: pointer;
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
  font-size: 14px;
}

/* 个人中心组建内容  */
.wrap {
  margin-bottom: 13px;
}
.header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
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
  border-radius: 0 0 3px 3px;
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
  font-size: 14px;
  color: #778087;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
}
.account-info {
  margin-top: 5px;
}
.points {
  padding: 5px 0;
  color: #333;
  font-size: 14px;
}
.github-wrap {
  margin-top: -5px;
  margin-bottom: 3px;

}
.github {
  display: inline-block;
  background: url("../assets/github.svg") no-repeat;
  background-size: contain;
  margin-left: 3px;
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
  font-size: 14px;
  color: #ababab;
  margin: 0 0 10px;
}

/* 最近创建的话题  */

.title {
  color: #444;
}

.cell {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;

  padding: 10px;
  font-size: 14px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
.pic-wrap a {
  display: block;
  width: 30px;
  height: 30px;
}
.pic-wrap img {
  width: 100%;
  border-radius: 3px;
}
.scan-wrap {
  min-width: 70px;
  text-align: center;
}
.review-count {
  color: #9e78c0;
}
.seperator {
  margin: 0 -3px;
  font-size: 10px; 
}
.scan-count {
  font-size: 10px;
  color: #b4b4b4;
}
.post-wrap {
  align-self: center;
  flex-basis: 70%;
  flex:1;
  margin-left: 10px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  font-size: 16px;
  line-height: 30px;
  color: #08c;
}
.time-wrap {
  font-size: 11px;
  margin-left: 20px;
  color: #777;
}


</style>
