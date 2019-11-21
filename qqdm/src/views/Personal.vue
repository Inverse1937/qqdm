<template>
  <div class="personal">
    <!-- 个人页 -->
    <div class="title">
      <span class="back" @click="back"></span>
      <span>个人中心</span>
      <div class="bottom"></div>
    </div>
    <div class="subscriber">
      <span class="wddy">我的订阅:</span>
      <span class="shuming" v-for="dy in $store.state.subscription" :key="dy.id">{{dy.name}}</span>
    </div>
    <div class="history">
      <span>阅读历史:</span>
      <div class="book" v-for="his in $store.state.history" :key="his.id">
        <span class="bookName">{{his.name}}</span>
        <span>读至:{{his.chapter_name}}</span>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Personal",
  methods:{
    back() {
      this.$router.back();
    },
  }
};
</script>
<style lang="scss" scoped>
.personal{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
}
.subscriber{
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  span{
    display: block;
    width: 100%;
  }

  

  .shuming{
    height: 1.7rem;
    line-height: 1.7rem;
    background-color: #fff;
    border-bottom: 1px solid #000;
    padding-left: 1rem;
  }
}

.history{
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .book{
    width: 100%;
    height: 2.7rem;
    background-color: #fff;

    .bookName{
      font-size: 1.2rem;
    }
    
    span{
      display: block;
      font-size: .7rem;
    }
  }
}

.title {
  width: 100%;
  height: 2.048rem;
  line-height: 2.048rem;
  position: relative;
  text-align: center;

  .back {
    position: absolute;
    top: 0.724rem;
    left: 0.7rem;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    transform: rotate(135deg);
  }

  p {
    position: absolute;
    top: 0;
    right: 0.7rem;
  }

  .bottom {
    width: 100%;
    height: 0.09rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(195, 44, 34);
    background: linear-gradient(
      90deg,
      rgba(195, 44, 34, 1) 0%,
      rgba(191, 140, 98, 1) 8%,
      rgba(191, 171, 98, 1) 16%,
      rgba(185, 190, 126, 1) 24%,
      rgba(143, 190, 118, 1) 32%,
      rgba(106, 189, 145, 1) 40%,
      rgba(92, 161, 189, 1) 48%,
      rgba(79, 115, 204, 1) 55%,
      rgba(70, 98, 217, 1) 64%,
      rgba(150, 115, 174, 1) 71%,
      rgba(180, 124, 187, 1) 79%,
      rgba(237, 56, 188, 1) 90%,
      rgba(253, 45, 84, 1) 100%
    );
  }
}
</style>