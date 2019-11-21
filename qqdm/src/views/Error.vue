<template>
  <div class="_error">
    <!-- 数据获取失败 -->
    <div class="title">
      <span class="back" @click="back"></span>
      <span>出错了</span>
      <div class="bottom"></div>
    </div>
    <h3>数据获取失败...</h3>
    <button @click="sx" class="sx">刷新</button>
    <button @click="back" class="fh">返回</button>
  </div>
</template>
<script>
export default {
  name: "error",
  methods: {
    back() {
      this.$router.go(-2);
    },
    sx() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss" scoped>
._error {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;

  h3 {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -4.25rem 0 0 -4rem;
  }

  .fh {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: 0.5rem;
    width: 3rem;
    height: 1.3rem;
  }

  .sx {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -3.5rem;
    width: 3rem;
    height: 1.3rem;
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