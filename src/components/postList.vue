<template>
  <div>
    <!--loading动画部分-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <!-- 主题帖子 -->
    <div></div>

  </div>
</template>

<script>
export default {
  name: "postList",
  data(){
    return {
      isLoading: false
    }
  },

  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20
      }).then( (res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

}

</script>

<style scoped>

</style>
