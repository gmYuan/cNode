<template>
  <div>
    <!--loading动画部分-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <!-- 主题帖子 -->
    <div>
      <ul>
        <!-- topbar部分 -->
        <li class="topbar">
          <a href="javascript:;" class="topic active">全部</a>
          <a href="javascript:;" class="topic">精华</a>
          <a href="javascript:;" class="topic">分享</a>
          <a href="javascript:;" class="topic">问答</a>
          <a href="javascript:;" class="topic">招聘</a>
          <a href="javascript:;" class="topic">客户端测试</a>
        </li>

        <!-- 列表项 -->
        <li v-for= "pst in posts" class="post">
          <span class="author">
            <a href="javascript:;">
              <img :src="pst.author.avatar_url" alt="author">
            </a>
          </span>
          <span class="num">
            <span class="reply">{{pst.reply_count}}</span>
            <span class="seperator">/</span>
            <span class="scan">{{pst.visit_count}}</span>
            
          </span>
          <span class="type top">
            置顶  
          </span>
          <span class="title">
            <a href="javascript:;">
               {{pst.title}}
            </a>
          </span>
          <span class="time">
            {{pst.last_reply_at}}
          </span> 
        </li>
       
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "postList",
  data(){
    return {
      isLoading: false,
      posts: []
    }
  },

  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20
      }).then( (res) => {
        this.isLoading = false
        this.posts = res.data.data

      }).catch((err) => {
        console.log(err)
      })
    }
  },

  beforeMount(){
    this.isLoading = true
    this.getData()
  }

}

</script>

<style scoped>

.clearfix::after{
  display: block;
  content: '';
  clear: both
}

.loading {
  margin: 0 auto;
  width: 100px;
  height: 100px;
}

.loading img {
  display: block;
  width: 100%;
}


.topbar{
  padding: 10px 15px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.topic {
  margin: 0 12px;
  color: #80bd01;
  font-size: 14px;
  word-break: break-word;
}
.topic.active{
  padding: 3px 4px;
  border-radius: 3px;

  color: #fff;
  background-color: #80bd01;
}


.post {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 30.188px;

  font-size: 14px;
  line-height: 2em;

  background: #fff;
  border-top: 1px solid #f0f0f0;
}

.post .author{
  padding: 10px;
}
.author a {
  display: block;
  width: 30px;
  height: 30.188px;
}
.author a img {
  display: block;
  max-width: 100%;
  border-radius: 3px;
}

.num {
  display: inline-block;
  min-width: 70px;
  line-height: 28px;
  text-align: center;
  margin-right: 3px;
}
.num .reply {
  color: #9e78c0;
}
.num .seperator {
  font-size: 10px;
  margin: 0 -2px;
}
.num .scan {
  font-size: 10px;
  color: #b4b4b4;
}

.type {
  padding: 3px 5px;
  font-size: 12px;
  line-height: 1.2em;
  border-radius: 3px;
  color: #999;
  background-color: #e5e5e5;
}
.type.top,
.tyoe.good {
  color: #fff;
  background: #80bd01;
}

.title {
  margin-left: 5px;
  margin-right: auto;
  display: inline-block;
  max-width: 70%;
  line-height: 30px;

  font-size: 16px;
  color: #333;
    
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title a:visited{
  color: #888;
}

.time {
  display: inline-block;
  margin-right: 10px;
  min-width: 50px;
  
   
  font-size: 11px;
  color: #778087;
  white-space: nowrap;         
}

</style>
