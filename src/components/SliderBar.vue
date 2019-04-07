<template>
  <div class="slideBar">
    <!-- 个人信息部分 -->
    <section class="part-wrap">
      <header class="header">
        <span class="txt">作者</span>
      </header>
      <div class="inner">
        <div class="user-card">
          <div class="pic-wrap">
            <div class="inner-pic">
              <router-link :to="{name:'userInfo',params:{userName: userInfo.loginname}}">
                <img :src="userInfo.avatar_url" alt="作者">
              </router-link>
            </div>
            <router-link :to="{name:'userInfo',params:{userName: userInfo.loginname}}">
               <span class="name">
                {{userInfo.loginname}}
               </span>
            </router-link>
          </div>

          <div class="points-wrap">
            <span class="points">积分：{{userInfo.score}} </span>
          </div>
          <div class="signature">
            " 这家伙很懒，什么个性签名都没有留下。"
          </div>
        </div>
      </div>
    </section>

    <!-- 作者其它话题 -->
    <section class="part-wrap">
      <header class="header">
        <span class="txt">作者最近话题</span>
      </header>
      <div class="inner">
        <ul class="lists">
          <li class="post" v-for="Post in getTopicLimit5">
            <router-link :to="{name: 'article', params:{postid: Post.id, name:Post.author.loginname}}">
               <span class="post-title">
                {{Post.title}}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <!-- 作者回复的话题-->
    <section class="part-wrap">
      <header class="header">
        <span class="txt">作者最近回复</span>
      </header>
      <div class="inner">
        <ul class="lists">
          <li class="post" v-for="Post in getReplayLimit5">
            <router-link :to="{name: 'article', params:{postid: Post.id, name:Post.author.loginname}}">
               <span class="post-title">
                {{Post.title}}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: "SliderBar",
  data(){
    return {
      userInfo: {}
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          this.userInfo = res.data.data
          console.log(this.userInfo)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeMount(){
    this.getData()
  },
  computed:{
    getTopicLimit5(){
      if (this.userInfo.recent_topics){
        return this.userInfo.recent_topics.slice(0,5)
      }
    },
    getReplayLimit5(){
      if (this.userInfo.recent_replies){
        return this.userInfo.recent_replies.slice(0,5)
      }
    }
  }

}


</script>

<style scoped>
.slideBar {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333;
}

/* 内容 */
.slideBar {
  margin-bottom: 20px;
  float: right;
  width: 290px;
  font-size: 14px;
}
.part-wrap {
  margin-bottom: 13px;
  font-size: 13px;
}
.header{
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.header .txt{
  color: #444;
}
.inner{
  padding: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  line-height: 2em;
}
.user-card .pic-wrap{
  display: flex;
  align-items: center;
}
.inner-pic{
  width: 48px;
  height: 48px;
  margin-right: .5em;
}
.inner-pic img{
  width: 100%;
  border-radius: 3px;
}
.name {
  max-width: 120px;
  font-size: 16px;
  color: #778087;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.points-wrap {
  margin-top: 10px;
  width: 80%;
}
.signature{
  font-style: italic;
}
.post{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post-title {
  display: inline-block;
  max-width: 270px;
  line-height: 30px;
  vertical-align: middle;

  font-size: 14px;
  color: #778087;
}


</style>
