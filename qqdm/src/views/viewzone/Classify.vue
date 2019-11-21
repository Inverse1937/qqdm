<template>
  <div class="classify">
    <!-- 分类 -->
    <ZoneTitle @todofun="todoApi" :classifyName="classifyName" />
    <ZoneContent :page="page" />
  </div>
</template>
<script>
import ZoneTitle from "../../components/zone/ZoneTitle";
import ZoneContent from "../../components/zone/ZoneContent";

export default {
  name: "classify",
  data: () => ({
    classifyName: [],
    page: { tc: 0, dz: 0, jd: 0, dy: 0 }
  }),
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      let resArr = await this.$http("/dmzj/classify/filter.json");
      this.classifyName = resArr.data;
      // console.log(this.classifyName);
    },
    todoApi(pageArr) {
      this.page = pageArr;
      // console.log(this.page)
    }
  },
  components: {
    ZoneTitle,
    ZoneContent
  }
};
</script>
<style lang="scss" scoped>
.classify {
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
}
</style>