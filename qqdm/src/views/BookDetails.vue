<template>
  <div class="bookdetails">
    <!-- 漫画详情 -->
    <div class="name">
      <span class="back" @click="back"></span>
      <span>{{comic.title}}</span>
      <span></span>
      <span></span>
      <div class="bottom"></div>
    </div>
    <div class="title">
      <span class="_img">
        <img :src="comic.cover" alt />
      </span>
      <div class="writer-name">
        <span v-for="n in comic.authors" :key="n.tag_id">{{n.tag_name}}</span>
      </div>
      <div class="_type">
        <span v-for="type in comic.types" :key="type.tag_id">{{type.tag_name}}</span>
      </div>
      <span class="_time">{{comic.last_updatetime*1000 | formatDate}}</span>
      <div class="_btn">
        <button v-show="other" @click="dyApi(comic.title,comic.id)">订阅漫画</button>
        <button v-show="qxOther" @click="qxdyApi(comic.title,comic.id)">已订阅</button>
        <button @click="routerApi(comic.id,comic.chapters[0].data[0].chapter_id)">开始观看</button>
      </div>
    </div>
    <div class="_intro" @touchstart="maskApi">
      <span>介绍: {{comic.description}}</span>
      <div class="mask" v-show="show"></div>
    </div>

    <div class="p-name">
      <span>章节列表</span>
      <div class="_order">
        <span>排序:</span>
        <span>倒序</span>
        <span>正序</span>
      </div>
    </div>

    <div class="p-detail">
      <div class="tit" v-for="(plan,index) in comic.chapters" :key="index">
        <span>{{plan.title}}</span>
        <span class="_zj">{{plan.data.length}}个章节</span>
        <div
          @click="routerApi(comic.title,p.chapter_title,comic.id,p.chapter_id,p.chapter_order,index)"
          class="plan"
          v-for="p in plan.data"
          :key="p.chapter_id"
        >
          <p>{{p.chapter_title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "../js/timer";
export default {
  name: "bookdetails",
  data: () => ({
    show: true,
    other:true,
    qxOther:false,
    tag_id: 0,
    comic: {}
  }),
  mounted() {
    // console.log(this.$route.query.key);
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
      this.tag_id = this.$route.query.key;
      let url = "/dmzj/comic/" + this.tag_id + ".json";
      let res = await this.$http(url);
      this.comic = res.data;
      // console.log(this.comic);
      if (this.comic == "Locked!") {
        this.$router.push("/error");
      }
      this.whether();
    },
    whether(){
      let whe = this.$store.state.subscription.filter(item => item.id === this.comic.id)
      // console.log(whe)
      if(whe.length != 0){
        this.other = false;
        this.qxOther = true
      }else{
        this.other = true;
        this.qxOther = false
      }
    },
    maskApi() {
      this.show = false;
    },
    back() {
      this.$router.back();
    },
    routerApi(name,chapter,id, c,o,i) {
      let payl = {name,chapter_name:chapter,id:id,chapter_id:c}
      this.$store.commit('historyAdd',payl)
      this.$router.push({ path: "/comic", query: {order:o, obj: id, chapter: c,ikey:i } });
    },
    dyApi(name,i){
      this.qxOther = true
      this.other = false
      let dy = {name:name,id:i}
      this.$store.commit('subscriptionAdd',dy)
    },
    qxdyApi(name,i){
      this.qxOther = false
      this.other = true
      let dy = {name:name,id:i}
      this.$store.commit('cancel',dy)
    }
  }
};
</script>
<style lang="scss" scoped>
.bookdetails {
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.name {
  width: 100%;
  height: 2.048rem;
  line-height: 2.048rem;
  position: relative;
  text-align: center;
  font-size: 0.7rem;

  .back {
    position: absolute;
    top: 0.724rem;
    left: 0.7rem;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    transform: rotate(135deg);
  }

  .bottom {
    width: 100%;
    height: 0.09rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(195, 44, 34);
    background: linear-gradient(
      90deg,
      rgba(195, 44, 34, 1) 0%,
      rgba(191, 140, 98, 1) 8%,
      rgba(191, 171, 98, 1) 16%,
      rgba(185, 190, 126, 1) 24%,
      rgba(143, 190, 118, 1) 32%,
      rgba(106, 189, 145, 1) 40%,
      rgba(92, 161, 189, 1) 48%,
      rgba(79, 115, 204, 1) 55%,
      rgba(70, 98, 217, 1) 64%,
      rgba(150, 115, 174, 1) 71%,
      rgba(180, 124, 187, 1) 79%,
      rgba(237, 56, 188, 1) 90%,
      rgba(253, 45, 84, 1) 100%
    );
  }
}

.title {
  width: 100%;
  height: 6.777rem;
  position: relative;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(135, 190, 126, 1) 27%,
    rgba(253, 187, 45, 1) 100%
  );
  font-size: 0.4321rem;

  .writer-name {
    position: absolute;
    top: 1rem;
    left: 5.876rem;
    color: #fff;

    span {
      margin-right: 0.3rem;
    }
  }

  ._type {
    position: absolute;
    top: 2.2rem;
    left: 5.876rem;
    color: #fff;

    span {
      margin-right: 0.3rem;
    }
  }

  ._time {
    position: absolute;
    top: 3.5rem;
    left: 5.876rem;
    color: #fff;
  }

  ._btn {
    position: absolute;
    bottom: 0.9rem;
    left: 5.876rem;
    color: #fff;

    button {
      margin-left: 1.5rem;
    }
  }
}

._img {
  width: 5.4321rem;
  height: 100%;
  display: block;
  padding: 0.7rem;
  box-sizing: border-box;

  img {
    width: 100%;
  }
}

._intro {
  width: 100%;
  height: 2.6rem;
  font-size: 0.654rem;
  line-height: 1.24rem;
  overflow: auto;
  margin-top: 0.3rem;
  background-color: #fff;
  position: relative;

  span {
    display: block;
    padding: 0.1rem 0.5rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.3984944319524685) 35%,
      rgba(255, 255, 255, 0.2528361686471463) 75%,
      rgba(0, 212, 255, 0.051155496378238796) 100%
    );
  }
}

.p-name {
  width: 100%;
  height: 1.42rem;
  line-height: 1.42rem;
  margin-top: 0.3rem;
  background-color: #fff;
  font-size: 0.765rem;
  position: relative;

  span {
    margin-left: 1rem;
  }
}

._order {
  position: absolute;
  top: 0rem;
  right: 0.9rem;

  span {
  }
}

.p-detail {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.tit {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.3rem;
  background-color: #fff;

  span {
    width: 50%;
    display: block;
    font-size: 0.7654rem;
    padding-left: 1.024rem;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ._zj {
    padding-left: 3.65rem;
  }

  .plan {
    width: 25%;
  }

  p {
    width: 80%;
    height: 1.024rem;
    line-height: 1.024rem;
    text-align: center;
    border: 1px solid #000;
    font-size: 0.4321rem;
    margin: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>