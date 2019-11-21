<template>
  <div class="special">
    <!-- 专题栏目 -->
    <div class="box" @click="routerApi(sname.id)" v-for="sname in specialName" :key="sname.id">
      <img :src="sname.small_cover" alt />
      <span>{{sname.title}}</span>
      <span class="timer">{{sname.create_time*1000 | formatDate}}</span>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
import { formatDate } from "../../js/timer";
export default {
  name: "special",
  data: () => ({
    subject: 0,
    page: 0,
    specialName: []
  }),
  mounted() {
    this.getOffData();
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    async getOffData() {
      let url = "/dmzj/subject/" + this.subject + "/" + this.page + ".json";
      let resArr = await this.$http(url);
      this.specialName = resArr.data;
      // console.log(this.specialName);
    },
    routerApi(i) {
      this.$router.push({ path: "/weekly", query: { key: i } });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.special {
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
}
.box {
  width: 100%;
  height: 8rem;
  margin-bottom: 0.484rem;
  overflow: hidden;
  background-color: #fff;

  img {
    width: 100%;
  }

  span {
    display: inline-block;
    font-size: 0.567rem;
    margin-left: 0.678rem;
  }

  .timer {
    float: right;
    margin-right: 1rem;
    line-height: 1.4rem;

    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
</style>