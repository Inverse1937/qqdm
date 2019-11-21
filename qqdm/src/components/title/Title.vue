<template>
  <div class="title">
    <div @click="User" class="personal">
      <img src="https://m.dmzj.com/images/bg_head_01.png" alt />
    </div>
    <Router-link to="/booksearch" tag="button" class="tab-item">
      <span class="inp">血源诅咒故事漫画</span>
    </Router-link>
    <span>
      <button class="btn">成为会员</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Title",
  methods:{
    User(){
      this.$router.push('/personal')
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 2rem;
  // background-color: #ccc;
  position: relative;
  background-color: gainsboro;

  .personal {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #828282;
    background-color: #fff;
    float: left;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;

    img {
      width: 100%;
    }
  }

  .tab-item {
    position: absolute;
    border: 0;
    left: 2.2rem;
    top: 0.4rem;
    background-color: #f4f4f4;
    height: 1.2rem;
    width: 7.5rem;
    display: block;
    border-radius: 5rem;
    line-height: 1.2rem;

    .inp {
      font-size: 0.56rem;
      color: #a3a4a9;
    }
  }

  .btn {
    position: absolute;
    border: 0.021rem solid #3163ece1;
    right: 0.9rem;
    top: 0.4rem;
    background-color: #3163ece1;
    height: 1.2rem;
    width: 4.6rem;
    border-radius: 0.2rem;
    color: #fffcfd;
    font-size: 0.6rem;
  }
}
</style>