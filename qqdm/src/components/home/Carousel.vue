<template>
  <div class="title" ref="img">
    <div
      @touchmove="touchMove"
      @touchend="endTime"
      @touchstart="startTime"
      class="lunbo-item"
      ref="slider"
      v-if="isShow"
    >
      <div class="img-item">
        <img
          @click="routerApi(this.lunbo[4].obj_id,this.lunbo[4].type)"
          :src="this.lunbo[4].cover"
          :alt="0"
        />
        <span class="imgtit">{{this.lunbo[4].title}}</span>
      </div>
      <div
        @click="routerApi(img.obj_id,img.type,img.url)"
        class="img-item"
        v-for="(img,index) in lunbo"
        :key="index"
      >
        <img :src="img.cover" alt />
        <span class="imgtit">{{img.title}}</span>
      </div>
      <div class="img-item">
        <img
          @click="routerApi(this.lunbo[0].obj_id,this.lunbo[0].type)"
          :src="this.lunbo[0].cover"
          :alt="0"
        />
        <span class="imgtit">{{this.lunbo[0].title}}</span>
      </div>
    </div>
    <span class="ol">
      <span class="li" :class="{active: n === index + 1 }" v-for="n in lunbo.length" :key="n"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: ["lunbo"],
  data: () => ({
    isShow: false,
    index: 0,
    timer: null,
    picWidth: 0,
    startX: 0,
    moveX: 0,
    resX: 0
  }),
  updated() {
    if (this.lunbo.length > 0) {
      this.isShow = true;
    }
  },
  methods: {
    nextPic() {
      // console.log(this.$refs.img.clientWidth);
      //获得当前页面下div宽度
      this.picWidth = this.$refs.img.clientWidth;
      //   console.log(this.picWidth)
      this.index++;
      let offsetX = -this.index * this.picWidth;
      this.$refs.slider.style.transition = "all .5s linear";
      this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      this.$refs.slider.addEventListener("transitionend", this.resetPic);
    },
    resetPic() {
      // console.log('动画结束')
      if (this.index >= this.lunbo.length) {
        this.index = 0;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      } else if (this.index < 0) {
        this.index = this.lunbo.length - 1;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      }
    },
    routerApi(i, type,url) {
      if (type == 1) {
        this.$router.push({ path: "/details", query: { key: i } });
      } else if (url) {
        this.$router.push({ path: "/external", query: { key: url } });
      } else if (type == 5) {
        this.$router.push({ path: "/weekly", query: { key: i } });
      }
    },
    startTime(evt) {
      clearInterval(this.timer);
      this.startX = evt.touches[0].pageX;
      // console.log(this.startX)
    },
    endTime() {
      clearInterval(this.timer);
      if (this.resX > 0) {
        if (Math.abs(this.resX) > this.picWidth / 3) {
          this.index--;
          this.$refs.slider.addEventListener("transitionend", this.resetPic);
          this.picWidth = this.$refs.img.clientWidth;
          let ofsetX = -this.index * this.picWidth;
          this.$refs.slider.style.transform = `translateX(${ofsetX}px)`;
          this.$refs.slider.style.transition = "all .5s linear";
          this.timer = setInterval(this.nextPic, 3000);
        } else {
          let ofsetX = -this.index * this.picWidth;
          this.$refs.slider.style.transform = `translateX(${ofsetX}px)`;
          this.$refs.slider.style.transition = "all .5s linear";
          this.timer = setInterval(this.nextPic, 3000);
        }
      } else {
        if (Math.abs(this.resX) > this.picWidth / 3) {
          this.index++;
          this.$refs.slider.addEventListener("transitionend", this.resetPic);
          this.picWidth = this.$refs.img.clientWidth;
          let ofsetX = -this.index * this.picWidth;
          this.$refs.slider.style.transform = `translateX(${ofsetX}px)`;
          this.$refs.slider.style.transition = "all .5s linear";
          this.timer = setInterval(this.nextPic, 3000);
        } else {
          let ofsetX = -this.index * this.picWidth;
          this.$refs.slider.style.transform = `translateX(${ofsetX}px)`;
          this.$refs.slider.style.transition = "all .5s linear";
          this.timer = setInterval(this.nextPic, 3000);
        }
      }
    },
    touchMove(evt) {
      clearInterval(this.timer);
      this.moveX = evt.touches[0].pageX;
      this.resX = this.moveX - this.startX;
      let ofsetX = -this.index * this.picWidth + this.resX;
      this.$refs.slider.style.transition = "none";
      this.$refs.slider.style.transform = `translateX(${ofsetX}px)`;
    }
  },
  mounted() {
    this.$nextTick(()=>{
    clearInterval(this.timer);
    this.timer = setInterval(this.nextPic, 3000);
    })
  },
  beforeDestroy() {
    // 清除计时器
    clearInterval(this.timer);
    this.$refs.slider.removeEventListener("transitionend", this.resetPic);
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.6rem;
  position: relative;
  width: 100%;
  height: 8.0082rem;
  border-radius: 0.3rem;
  overflow: hidden;
  .lunbo-item {
    width: 1000%;
    text-align: left;
    position: absolute;
    top: 0;
    left: -100%;

    .img-item {
      width: 10.01%;
      overflow: hidden;
      height: 8.2556rem;
      float: left;
      position: relative;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  .imgtit {
    background-color: rgba(4, 129, 245, 0.5);
    padding-left: 0.5rem;
    color: #fff;
    display: inline-block;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.7rem;
    overflow: hidden;
    position: absolute;
    bottom: 0.2rem;
    left: 0;
  }
}
.ol {
  position: absolute;
  right: 0;
  bottom: 0.25rem;
  display: inline-block;
  padding: 0 0.32rem;
  .li {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: #fff;
    float: left;
    margin: 0.2rem;
    z-index: 10;
  }
  .active {
    background-color: #de698c;
  }
}
</style>