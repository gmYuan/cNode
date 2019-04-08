<template>

  <div class="pagination">
    <ul class="allpages">
      <li class="page" @click="setIndex">
        <a>
          首页
        </a>
      </li>
      <li class="page" v-if="currentIndex > 3">
        <a>
          ...
        </a>
      </li>

      <li class="page" 
        v-for="page in pageIndex"
        @click="changeIndex(page)"
        :class="{active: currentIndex === page}">
        <a>
          {{page}}
        </a>
      </li>
     
      <li class="page" @click="setIndex">
        <a>
          下一页
        </a>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "Pagination",
  data(){
    return {
      pageIndex: [1,2,3,4,5,'...'],
      currentIndex: 1,
    }
  },
  methods: {
    changeIndex(index){
      if (typeof index === 'number'){
        if (index >= 3){
          this.pageIndex = [index-2,index-1,index,index+1,index+2, '...']
        }else {
          this.pageIndex = [1,2,3,4,5,'...']
        }
        this.currentIndex = index
      }
    },
    setIndex(e){
      switch (e.target.innerText){
        case '首页':
          this.pageIndex = [1,2,3,4,5,'...']
          this.currentIndex = 1
          break;
        case '下一页':
          let i = this.currentIndex
          if (i < 3 ) {
             this.pageIndex = [1,2,3,4,5,'...']
             this.currentIndex += 1
          } else {
            this.pageIndex = [i-1,i,i+1,i+2,i+3,'...']
            this.currentIndex += 1
          }
          break;
      }
    }
  },  // 对应methods

  watch: {
    currentIndex: function(newValue,oldValue){
      this.$emit('pageContent', newValue)
    }
  }

}

</script>

<style scoped>

.pagination {
  margin: 20px 0 0 10px;
  height: 40px;
  font-size: 14px;
  line-height: 2em;
  color: #333;
  word-break: break-word;
}
.allpages {
  display: flex;
}

.page {
  line-height: 20px;
}

.page a {
  padding: 4px 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-left-width: 0;
  color: #778087;
  cursor: pointer;

}

.page:first-child > a{
  border-left-width: 1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.page:last-child > a{
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.page a:hover {
  background-color: #f5f5f5;
}

.page.active a {
  color: #80bd01;
}

</style>