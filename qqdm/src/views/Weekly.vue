<template>
  <div class="weekly">
    <!-- 周刊 -->
    <div class="title">
      <span class="back" @click="back"></span>
      <span>漫画专题</span>
      <p>分享</p>
      <div class="bottom"></div>
    </div>
    <div class="_container">
      <div class="_img">
        <img :src="weekly.mobile_header_pic" alt />
      </div>
      <div class="head_name">
        <span>{{weekly.title}}</span>
      </div>
      <div class="_narrate" @touchstart="maskApi">
        <span>{{weekly.description}}</span>
        <div class="mask" v-show="show"></div>
      </div>
    </div>
    <div class="_review">
      <span>PC端</span>
      <span>{{weekly.comment_amount}}评论</span>
      <span>全部订阅</span>
    </div>
    <div class="comic_box">
      <div class="box" @click="routerApi(comic.id)" v-for="comic in weekly.comics" :key="comic.id">
        <span class="comic_img">
          <img :src="comic.cover" alt />
        </span>
        <span class="_name">{{comic.name}}</span>
        <span class="_type">{{comic.recommend_brief}}</span>
        <span class="_intro">{{comic.recommend_reason}}</span>
        <span class="_approve">订阅漫画</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "weekly",
  data: () => ({
    show: true,
    weeklyId: 0,
    weekly: {}
  }),
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      this.weeklyId = this.$route.query.key;
      let url = "/dmzj/subject/" + this.weeklyId + ".json";
      let res = await this.$http(url);
      this.weekly = res.data;
    //   console.log(this.weekly);
    },
    back() {
      this.$router.back();
    },
    maskApi() {
      this.show = false;
    },
    routerApi(i) {
      this.$router.push({ path: "/details", query: { key: i } });
    }
  }
};
</script>
<style lang="scss" scoped>
.weekly {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
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

._container {
  width: 100%;
  height: 13.139rem;

  ._img {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .head_name {
    width: 100%;
    height: 1.024rem;
    line-height: 1.024rem;
    margin-top: 0.3rem;
    background-color: #fff;
    font-size: 0.7rem;

    span {
      margin-left: 0.3rem;
    }
  }
}

._narrate {
  width: 100%;
  line-height: 1.024rem;
  max-height: 3rem;
  font-size: 0.625rem;
  margin-top: 0.3rem;
  background-color: #fff;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  span {
    display: block;
    padding: 0 0.5rem;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.3) 20%,
      rgba(255, 255, 255, 0.2) 75%
    );
  }
}

._review {
  background-color: #fff;
  display: flex;

  span {
    display: block;
    width: 33%;
    text-align: center;
    font-size: 0.76rem;
  }
}

.comic_box {
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
}

.box {
  width: 100%;
  height: 4.4rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 134, 255, 0.1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
  border-bottom: 1px solid #cbcbcb;
  position: relative;
  color: #000;

  .comic_img {
    display: block;
    width: 3.015rem;
    height: 4rem;
    position: absolute;
    top: 0.2rem;
    left: 0.5rem;

    img {
      width: 100%;
    }
  }

  ._name {
    position: absolute;
    left: 4.1rem;
    top: 0.3rem;
    display: block;
    font-size: 0.6rem;
  }

  ._type {
    position: absolute;
    left: 4.1rem;
    top: 1.4rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  ._intro {
    position: absolute;
    left: 4.1rem;
    top: 2.2rem;
    width: 8rem;
    overflow: hidden;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  ._approve {
    position: absolute;
    right: 1.3rem;
    top: 50%;
    margin-top: -0.3rem;
    font-size: 0.5rem;
    display: block;
    width: 2rem;
    height: 0.6rem;
    line-height: 0.6rem;
  }
}
</style>