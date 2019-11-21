<template>
  <div class="rankmodule">
    <!-- 排行详情 -->
    <div class="title">
      <span class="rq" :class="{active:sort===0}" @click="sortApi(0)">人气排行</span>
      <span class="tc" :class="{active:sort===1}" @click="sortApi(1)">吐槽排行</span>
      <span class="dy" :class="{active:sort===2}" @click="sortApi(2)">订阅排行</span>
      <button class="sx" @click="sxApi">筛选</button>
    </div>
    <div class="sizer" v-show="show">
      <div class="l">
        <span :class="{sxname:aaa===1}" @click="sizerApi(1)">分类</span>
        <span :class="{sxname:aaa===2}" @click="sizerApi(2)">时间</span>
      </div>
      <div class="r">
        <div ref="sxzone">
          <span :class="{sxid_name:page===0}" @click="pageApi(0)">全部漫画</span>
          <span
            :class="{sxid_name:page===z.tag_id}"
            v-for="z in zonename"
            :key="z.tag_id"
            @click="pageApi(z.tag_id)"
          >{{z.title}}漫画</span>
        </div>
        <div ref="sxtime" class="sx_time">
          <span :class="{sxid_name:timer===0}" @click="timerApi(0)">今日</span>
          <span :class="{sxid_name:timer===1}" @click="timerApi(1)">本周</span>
          <span :class="{sxid_name:timer===2}" @click="timerApi(2)">本月</span>
          <span :class="{sxid_name:timer===3}" @click="timerApi(3)">总排行</span>
        </div>
      </div>
    </div>
    <div class="comic-book">
      <div v-show="show" class="mask"></div>
      <div
        @click="routerApi(rank.comic_id)"
        class="book"
        v-for="(rank,index) in rankName"
        :key="index"
      >
        <span class="img">
          <img :src="rank.cover" alt />
        </span>
        <span class="name">{{rank.title}}</span>
        <span class="type">{{rank.types}}</span>
        <span class="writer">{{rank.authors}}</span>
        <span class="timer">{{rank.last_updatetime*1000 | formatDate}}</span>
        <span class="last_name">{{index+1}}</span>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
import { formatDate } from "../../js/timer";
export default {
  name: "rankmodule",
  data: () => ({
    show: false,
    aaa: 1,
    timer: 0,
    sort: 0,
    page: 0,
    rankName: [],
    zonename: []
  }),
  watch: {
    timer() {
      this.getOffData();
    },
    sort() {
      this.getOffData();
    },
    page() {
      this.getOffData();
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      let url =
        "/dmzj/rank/0/" +
        this.timer +
        "/" +
        this.sort +
        "/" +
        this.page +
        ".json";
      let res = await this.$http(url);
      this.rankName = res.data;
    //   console.log(this.rankName);

      let zone = await this.$http("/dmzj/1/category.json");
      this.zonename = zone.data;
      //   console.log(this.zonename)
    },
    pageApi(i) {
      this.page = i;
      this.show = !this.show;
    },
    sortApi(i) {
      this.sort = i;
    },
    timerApi(i) {
      this.timer = i;
      this.show = !this.show;
    },
    sxApi() {
      this.show = !this.show;
    },
    sizerApi(i) {
      if (i == 1) {
        this.$refs.sxzone.style.display = "block";
        this.$refs.sxtime.style.display = "none";
        this.aaa = 1;
      } else {
        this.$refs.sxtime.style.display = "block";
        this.$refs.sxzone.style.display = "none";
        this.aaa = 2;
      }
    },
    routerApi(i) {
      this.$router.push({ path: "/details", query: { key: i } });
    }
  }
};
</script>
<style lang="scss" scoped>
rankmodule {
  width: 100%;
  height: 100%;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50rem;
  background-color: #000;
  opacity: 0.4;
  z-index: 1;
}

.title {
  margin: 0.3rem 0;
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: relative;

  span {
    display: block;
    font-size: 0.47rem;
  }

  .active {
    color: #fff;
    background: rgb(0, 212, 255);
    background: linear-gradient(
      180deg,
      rgba(0, 212, 255, 1) 95%,
      rgba(9, 9, 121, 1) 100%,
      rgba(2, 0, 36, 1) 100%
    );
  }

  .rq {
    position: absolute;
    top: 0.195rem;
    left: 0.4rem;
    width: 3.05rem;
    height: 1.024rem;
    border: 1px solid #cbcbcb;
    border-radius: 0.1rem 0 0 0.1rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.024rem;
  }

  .tc {
    position: absolute;
    top: 0.195rem;
    left: 3.45rem;
    width: 3.05rem;
    height: 1.024rem;
    border: 1px solid #cbcbcb;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.024rem;
  }

  .dy {
    position: absolute;
    top: 0.195rem;
    left: 6.5rem;
    width: 3.05rem;
    height: 1.024rem;
    border: 1px solid #cbcbcb;
    border-radius: 0 0.1rem 0.1rem 0;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.024rem;
  }

  .sx {
    position: absolute;
    top: 0.195rem;
    right: 0.4rem;
    width: 2.25rem;
    height: 1.024rem;
    border: 1px solid #cbcbcb;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 212, 255, 1) 30%,
      rgba(0, 212, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    border-radius: 0.1rem;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.81rem;
  }
}
.sizer {
  display: flex;
  font-size: 0.7rem;
  z-index: 10;
}

.l {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 4.1234rem;

  span {
    display: block;
    height: 1.548rem;
    line-height: 1.548rem;
    border-bottom: 1px solid #cbcbcb;
  }

  .sxname {
    background-color: #000;
    color: #fff;
  }
}

.r {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;

  span {
    display: block;
    color: #000;
    opacity: 0.5;
    height: 1.548rem;
    line-height: 1.548rem;
    border-bottom: 1px solid #cbcbcb;
    padding-left: 0.5rem;
  }

  .sxid_name {
    background-color: #000;
    color: #fff;
    position: relative;
  }

  .sxid_name::after {
    content: "";
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    background-color: red;
    position: absolute;
    right: 1rem;
    top: 0.4rem;
  }
}
.sx_time {
  display: none;
}

.comic-book {
  display: flex;
  flex-direction: column;
  position: relative;
}
.book {
  width: 100%;
  height: 5.4rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 241, 241, 1) 100%
  );
  border-bottom: 1px solid #cbcbcb;
  position: relative;
  color: #000;

  .img {
    display: block;
    width: 3.625rem;
    height: 4.832rem;
    position: absolute;
    top: 0.285rem;
    left: 0.45rem;

    img {
      width: 100%;
    }
  }

  .name {
    position: absolute;
    left: 5.1rem;
    top: 0.8rem;
    display: block;
    font-size: 0.6rem;
    width: 6rem;
    height: 1.024rem;
    line-height: 1.024rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .writer {
    position: absolute;
    left: 5.1rem;
    top: 2.2rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  .type {
    position: absolute;
    left: 5.1rem;
    top: 3.1rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  .timer {
    position: absolute;
    left: 5.1rem;
    top: 4.1rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  .last_name {
    position: absolute;
    right: 1.3rem;
    top: 3rem;
    font-size: 0.47rem;
    display: block;
    width: 2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>