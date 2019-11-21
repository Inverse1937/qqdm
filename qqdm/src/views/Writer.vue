<template>
  <div class="writer">
    <!-- 作家相关 -->
    <div class="title">
      <span class="back" @click="back"></span>
      <span>{{writer.nickname}}</span>
      <p class="r">人气</p>
      <p class="g">更新</p>
      <div class="bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Writer",
  data: () => ({
    show: true,
    WriterId: 0,
    writer: {}
  }),
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      this.WriterId = this.$route.query.key;
      let url = "/dmzj/UCenter/author/" + this.WriterId + ".json";
      let res = await this.$http(url);
      this.writer = res.data;
      // console.log(this.writer);
    },
    back() {
      this.$router.back();
    },
    maskApi() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.writer {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
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

  .r {
    position: absolute;
    top: 0;
    right: 2.8rem;
    font-size: 0.765rem;
  }

  .g {
    position: absolute;
    top: 0;
    right: 0.5rem;
    font-size: 0.765rem;
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