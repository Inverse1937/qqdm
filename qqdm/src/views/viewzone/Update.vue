<template>
  <div class="update">
    <!-- 最近更新 -->
    <UpDateComponent :updata="updata" />
  </div>
</template>
<script>
import UpDateComponent from "../../components/update/UpDateComponent.vue";
export default {
  name: "update",
  data: () => ({
    type: 100,
    page: 0,
    updata: []
  }),
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      let url = "/dmzj/latest" + "/" + this.type + "/" + this.page + ".json";
      let res = await this.$http(url);
      this.updata = res.data;
      // console.log(this.updata);
    }
  },
  components: {
    UpDateComponent
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0.5rem;
}
</style>