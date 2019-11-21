<template>
  <div class="zonecontent">
    <!-- 分类目录 -->
    <div class="title">
      <span>筛选结果</span>
      <span class="rq" :class="{active:sort===0}" @click="rqApi">人气</span>
      <span class="gx" :class="{active:sort===1}" @click="gxApi">更新</span>
    </div>
    <div class="content">
      <div class="box" @click="routerApi(book.id)" v-for="book in zoneData" :key="book.id">
        <img :src="book.cover" alt />
        <span class="titname">{{book.title}}</span>
        <span class="authors">{{book.authors}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZoneContent",
  props: ["page"],
  data: () => ({
    sort: 0,
    zoneData: []
  }),
  mounted() {
    this.getOffData();
  },
  watch: {
    page() {
      this.getOffData();
    },
    sort() {
      this.getOffData();
    }
  },
  methods: {
    async getOffData() {
      // console.log(this.page.tc);
      let url = "";
      if (this.page.dz === 0 && this.page.jd === 0 && this.page.dy === 0) {
        url =
          "/dmzj/classify" +
          "/" +
          0 +
          "/" +
          this.sort +
          "/" +
          this.page.tc +
          ".json";
      } else if (this.page.dz === 0 && this.page.jd === 0) {
        url =
          "/dmzj/classify" +
          "/" +
          this.page.dy +
          "/" +
          this.sort +
          "/" +
          this.page.tc +
          ".json";
      } else if (this.page.dz === 0 && this.page.dy === 0) {
        url =
          "/dmzj/classify" +
          "/" +
          this.page.jd +
          "/" +
          this.sort +
          "/" +
          this.page.tc +
          ".json";
      } else if (this.page.jd === 0 && this.page.dy === 0) {
        url =
          "/dmzj/classify" +
          "/" +
          this.page.dz +
          "/" +
          this.sort +
          "/" +
          this.page.tc +
          ".json";
      } else {
        url =
          "/dmzj/classify" +
          "/" +
          this.page.dz +
          "-" +
          this.page.jd +
          "-" +
          this.page.dy +
          "/" +
          this.sort +
          "/" +
          this.page.tc +
          ".json";
      }
      // console.log(url);
      let res = await this.$http(url);
      this.zoneData = res.data;
      // console.log(this.zoneData);
    },
    gxApi() {
      this.sort = 1;
    },
    rqApi() {
      this.sort = 0;
    },
    routerApi(i) {
      this.$router.push({ path: "/details", query: { key: i } });
    }
  },
  beforeUpdate() {
    // this.getOffData()
  }
};
</script>
<style lang="scss" scoped>
.zonecontent {
  width: 100%;
  height: 100%;
}

.title {
  width: 100%;
  height: 1.024rem;
  line-height: 1.024rem;
  font-size: 0.8rem;
  position: relative;

  span {
    display: block;
    margin-left: 0.7rem;
  }

  .rq {
    font-size: 0.6rem;
    position: absolute;
    top: 0;
    right: 3rem;
  }

  .gx {
    font-size: 0.6rem;
    position: absolute;
    top: 0;
    right: 0.7rem;
  }

  .active {
    color: #0090ff;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 33%;

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 0.3rem 0.3rem 0 0.3rem;
  }

  .titname {
    display: block;
    width: 100%;
    font-size: 0.6rem;
    color: #000;
    line-height: 0.6rem;
  }

  .authors {
    display: block;
    font-size: 0.5rem;
  }
}
</style>