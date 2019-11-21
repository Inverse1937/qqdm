<template>
  <div class="home">
    <!-- 主页/推荐页 -->
    <Carousel :lunbo="lunbo" />
    <Outline :bookdata="bookdata" />
  </div>
</template>
<script>
import Carousel from "../../components/home/Carousel";
import Outline from "../../components/home/Outline";
export default {
  name: "home",
  data: () => ({
    bookdata: [],
    lunbo: {}
  }),
  mounted() {
    // this.$http("/dmzj/recommend.json").then(
    //   res => console.log(res.data[0].data[0].cover)
    // );
    this.getOffData();
  },
  methods: {
    async getOffData() {
      let res = await this.$http("/dmzj/recommend.json");
      this.bookdata = res.data;
      this.lunbo = res.data[0].data;
      console.log(this.bookdata);
    }
  },
  components: {
    Carousel,
    Outline
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
}
</style>