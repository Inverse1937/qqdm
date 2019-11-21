<template>
  <div class="itemtex">
    <div @click="routerApi(up.id)" class="lately" v-for="(up,index) in updata" :key="index">
      <span class="img">
        <img :src="up.cover" alt />
      </span>
      <span class="name">{{up.title}}</span>
      <span class="type">{{up.types}}</span>
      <span class="writer">{{up.authors}}</span>
      <span class="timer">{{up.last_updatetime*1000 | formatDate}}</span>
      <span class="last_name">{{up.last_update_chapter_name}}</span>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { formatDate } from "../../js/timer";
export default {
  name: "itemtex",
  props: ["updata"],
  data: () => ({
    timer: new Date()
  }),
  methods: {
    routerApi(i) {
      this.$router.push({ path: "/details", query: { key: i } });
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style lang="scss" scoped>
.lately {
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

  .img {
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

  .name {
    position: absolute;
    left: 4.1rem;
    top: 0.3rem;
    display: block;
    font-size: 0.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 8rem;
  }

  .writer {
    position: absolute;
    left: 4.1rem;
    top: 1.4rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  .type {
    position: absolute;
    left: 4.1rem;
    top: 2.3rem;
    font-size: 0.47rem;
    display: block;
    opacity: 0.7;
  }

  .timer {
    position: absolute;
    left: 4.1rem;
    top: 3.3rem;
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