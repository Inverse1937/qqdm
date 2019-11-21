<template>
  <div class="zone">
    <RouterLink to="/" tag="div" exact class="tab-item">推荐</RouterLink>
    <RouterLink to="/update" tag="div" class="tab-item">更新</RouterLink>
    <RouterLink to="/classify" tag="div" class="tab-item">分类</RouterLink>
    <Router-link to="/bookrank" tag="div" class="tab-item">排行</Router-link>
    <Router-link to="/special" tag="div" class="tab-item">专题</Router-link>
  </div>
</template>

<script>
export default {
  name: "bookzone"
};
</script>
<style lang="scss" scoped>
.zone {
  display: flex;
  padding-left: 1.024rem;
  white-space: nowrap;
  background-color: #fff;
  .tab-item {
    text-align: center;
    flex: 1;
    color: #767676;
    font-size: 0.6rem;
    margin-right: 1.5rem;
    line-height: 1.28rem;
    &.router-link-active {
      color: #fb759b;
      border-bottom: 2px solid #fb759b;
    }
  }
}
</style>