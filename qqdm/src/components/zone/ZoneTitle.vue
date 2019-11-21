<template>
  <div class="zonetitle">
    <!-- 分类目录 -->
    <div
      class="filter"
      :class="{pitch:filter === index}"
      v-for="(rankname,index) in classifyName"
      :key="index"
    >
      <div :class="{mask:filter === index}" ref="mask" @click="maskApi(index)"></div>
      <div class="name" @click="leiming(index)" ref="leim">{{rankname.title}}</div>
      <div class="box" :class="{active:filter === index}" ref="boxs">
        <div
          class="sort"
          @click="transferApi(index,zone.tag_id)"
          v-for="zone in rankname.items"
          :key="zone.tag_id"
        >
          <span>{{zone.tag_name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZoneTitle",
  props: ["classifyName"],
  data: () => ({
    filter: 10,
    pageArr: {},
    tc: 0,
    dz: 0,
    jd: 0,
    dy: 0
  }),
  methods: {
    leiming(index) {
      this.filter = index;
    },
    transferApi(i, id) {
      //   console.log(i,id)
      switch (i) {
        case 0:
          this.tc = id;
          break;
        case 1:
          this.dz = id;
          break;
        case 2:
          this.jd = id;
          break;
        case 3:
          this.dy = id;
          break;
        default:
          break;
      }
      this.pageArr = { tc: this.tc, dz: this.dz, jd: this.jd, dy: this.dy };
    //   console.log(this.pageArr);

      this.$emit("todofun", this.pageArr);

      let itname = this.classifyName[i].items;
      let tagzone = itname.filter(item => item.tag_id == id);
      this.$refs.leim[i].innerHTML = tagzone[0].tag_name;

      this.$refs.boxs[i].classList.remove("active");
      this.$refs.mask[i].classList.add("box");
    },
    maskApi(i) {
      this.$refs.boxs[i].classList.remove("active");
      this.$refs.mask[i].classList.add("box");
    }
  }
};
</script>

<style lang="scss" scoped>
.zonetitle {
  position: relative;
  margin: 0.2rem 0;
  width: 100%;
  height: 0.9527rem;
  line-height: 0.9527rem;
  display: flex;
  background-color: #fff;

  .filter {
    width: 25%;
    font-size: 0.8rem;
    text-align: center;
  }
  .pitch {
    color: #0090ff;
  }
}
.mask {
  width: 100%;
  height: 28rem;
  position: absolute;
  top: 2rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.box {
  display: none;
}
.active {
  position: absolute;
  left: 0;
  top: 0.8rem;
  margin: 0.4rem 0;
  width: 100%;
  max-height: 9.9rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  overflow: hidden;
  z-index: 10;

  .sort {
    margin: 0.2rem 0.4rem;
    width: 20%;
    border: 1px solid #ccc;
    color: #585858;
    border-radius: 0.1rem;
    text-align: center;
    font-size: 0.5417rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
  }
}
</style>