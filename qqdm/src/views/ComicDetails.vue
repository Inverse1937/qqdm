<template>
  <div class="comic">
    <!-- 章节详情 -->
    <div class="title">
      <span class="back" @click="back"></span>
      <span class="name">{{comic.title}}</span>
      <div class="bottom"></div>
    </div>
    <div class="box">
      <img v-for="(i,index) in comic.page_url" :key="index" :src="i" alt="">
      <!-- <img @click="showApi" src="https://mfiles.alphacoders.com/808/808251.JPG" alt />
      <img @click="showApi" src="https://mfiles.alphacoders.com/808/808654.jpg" alt />
      <img @click="showApi" src="https://mfiles.alphacoders.com/807/807955.jpg" alt />
      <img @click="showApi" src="https://mfiles.alphacoders.com/797/797796.jpg" alt />
      <img @click="showApi" src="https://mfiles.alphacoders.com/793/793267.jpg" alt /> -->
    </div>

    <div v-show="show" class="b">
      <span @click="previousPage">上一章</span>|
      <span>目录</span>|
      <span @click="nextPage">下一章</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "bookdetails",
  data: () => ({
    show: true,
    obj_id: 0,
    chapterId: 0,
    order:0,
    iKey:0,
    comic: {},
    hostComic:[]
  }),
  wacth:{
    chapterId(){
      this.getOffData()
    }
  },
  mounted() {
    this.parameter()
    this.getOffData();
  },
  methods: {
    parameter(){
      this.iKey = this.$route.query.ikey
      this.order = this.$route.query.order
      this.obj_id = this.$route.query.obj;
      this.chapterId = this.$route.query.chapter;
    },
    async getOffData() {
      let url = "/dmzj/chapter/" + this.obj_id + "/" + this.chapterId + ".json";
      let res = await this.$http(url);
      this.comic = res.data;
      // console.log(this.comic);

      let hostUrl = "/dmzj/comic/" + this.obj_id + ".json";
      let hostRes = await this.$http(hostUrl);
      this.hostComic = hostRes.data.chapters[this.iKey].data
      // console.log(this.hostComic);
    },
    showApi() {
      this.show = !this.show;
    },
    nextPage(){
      // console.log(this.chapterId)
      let num = parseInt(this.order) + 10
      let arr = this.hostComic.filter(item =>item.chapter_order == num)
      let chap = arr[0].chapter_id
      this.$router.push({ path: "/comic", query: {order:num, obj: this.obj_id, chapter: chap,ikey:this.iKey } });
      this.$router.go(0)
    },
    previousPage(){
      // console.log(this.chapterId)
      let num = parseInt(this.order) - 10
      let arr = this.hostComic.filter(item =>item.chapter_order == num)
      let chap = arr[0].chapter_id
      this.$router.push({ path: "/comic", query: {order:num, obj: this.obj_id, chapter: chap,ikey:this.iKey } });
      this.$router.go(0)
    },
    back() {
      this.$router.back()
    }
  }
};
</script>
<style lang="scss" scoped>
.comic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.box {
  width: 100%;
  display: flex;
  margin-top: 2.048rem;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
  }
}

.title {
  width: 100%;
  height: 2.048rem;
  line-height: 2.048rem;
  position: fixed;
  background-color: #fff;
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

  .name {
    font-size: 0.65rem;
    width: 10.98rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 2.048rem;
    line-height: 2.048rem;
    display: block;
    position: absolute;
    top: 0;
    left: 2.7rem;
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

.b {
  display: flex;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;

  span {
    flex: 1;
    text-align: center;
  }
}
</style>
