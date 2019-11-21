<template>
  <div class="shousuo">
    <div class="title">
      <div class="inp">
        <img @click="getVal" src="https://s1.hdslb.com/bfs/static/mult/images/search-pro.png" alt />
        <input v-model="str" class="inp-actual" placeholder="请输入您要搜索的内容" type="text" name id />
        <button class="_but" @click="getVal">确定</button>
      </div>
      <span class="back" @click="back">取消</span>
      <div class="bottom"></div>
    </div>
    <div class="_val" v-show="show" @click="getVal">
      <div @click="valApi(v.name)" class="box" v-for="v in valData" :key="v.last_updatetime">
        <span>{{v.name}}</span>
        <!-- <span>{{v.last_updatetime}}</span>
        <span>{{v.last_update_chapter_name}}</span>
        <span>{{v.types}}</span>-->
      </div>
    </div>
    <div class="others">
      <div class="t">大家都在搜</div>
      <div class="actual">
        <span v-for="hot in hotData" :key="hot.id">{{hot.name}}</span>
      </div>
    </div>
    <div class="record">
      <div class="bt">
        <p>历史记录</p>
      </div>
      <div ref="ls" class="ls" v-for="(s,index) in arr" :key="index">
        <img src="//s1.hdslb.com/bfs/static/mult/images/history.png" alt />
        <p>{{s.text}}</p>
      </div>
      <div class="qc" @click="getQc()">
        <p>清除历史记录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShouSuo",
  data: () => ({
    show: false,
    arr: [{ text: "记录1", other: false }, { text: "记录2", other: false }],
    hotData: [],
    val: {},
    valData: {},
    str: ""
  }),
  watch: {
    str() {
      this.search();
    }
  },
  mounted() {
    this.getOffData();
  },
  methods: {
    async getOffData() {
      let res = await this.$http("/dmzj/search/hot/0.json");
      this.hotData = res.data.slice(0, 10);
      // console.log(this.hotData);
    },
    async search() {
      if (this.str) {
        this.show = true;
        let url = "/api/wap_search?callback=success&keywords=" + this.str;
        let valRes = await this.$http(url);
        // eslint-disable-next-line
        let success = val => {
          // console.log(val);
          this.valData = val.data;
          // console.log(this.valData);
        };
        this.val = valRes.data;
        eval(this.val);
      } else {
        this.show = false;
        this.valData = {};
      }
    },

    valApi(i) {
      this.str = i;
    },

    back() {
      this.$router.back();
    },
    getVal() {
      if (this.str) {
        this.show = true;
        let arrA = { text: this.str, other: false };
        this.arr.push(arrA);
        this.str = "";
        console.log(this.arr);
      } else {
        this.show = false;
      }
    },
    getQc() {
      this.arr = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.shousuo {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
}

.title {
  height: 2rem;
  padding-left: 0.5rem;
  position: relative;

  .inp {
    width: 85%;
    height: 1.7rem;
    margin-top: 0.29867rem;
    position: relative;

    img {
      position: absolute;
      top: 0.4rem;
      left: 0.35rem;
      width: 1rem;
      height: 1rem;
    }
  }

  .inp-actual {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    border: 0.02133rem solid #e7e7e7;
    border-radius: 0.27067rem;
    color: #505050;
    padding-left: 1.70667rem;
    padding-right: 3.37067rem;
    box-sizing: border-box;
    font-size: 0.6rem;
  }

  ._but {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    border: 0;

    &:focus {
      outline: 0;
    }
  }

  .back {
    position: absolute;
    top: 0.425rem;
    right: 0.5rem;
    color: #fb81a4;
    font-size: 0.55rem;
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

._val {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 2.3rem;
  left: 0;
  display: flex;
  flex-direction: column;

  .box {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #505050;
  }

  span {
    font-size: 0.8rem;
    display: block;
    height: 2.345rem;
    line-height: 2.45rem;
    padding-left: 0.5rem;
  }
}

.others {
  width: 100%;
  padding-left: 0.7rem;
  display: inline-block;
  background-color: #f5f5f5;

  .t {
    display: block;
    width: 100%;
    padding-top: 0.68267rem;
    color: #999;
    line-height: 0.59733rem;
    font-size: 0.59733rem;
    text-align: left;
  }

  .actual {
    width: 100%;
    display: inline-block;
    font-size: 0.59733rem;

    span {
      float: left;
      padding: 0.40533rem 0.512rem;
      margin-top: 0.512rem;
      margin-right: 0.36267rem;
      border: 0.04267rem solid #ccc;
      border-radius: 0.68267rem;
    }
  }
}

.record {
  margin-top: 1.10933rem;
  border-top: 0.42667rem solid #f4f4f4;
  .bt {
    margin-left: 0.53333rem;
    text-align: left;
    color: #999;
    font-size: 0.59733rem;
    line-height: 1.96267rem;
  }
  .ls {
    height: 1.87733rem;
    line-height: 1.87733rem;
    margin-left: 0.53333rem;
    border-bottom: 0.02133rem solid #ccc;
    position: relative;
    font-size: 0.59733rem;
    img {
      display: block;
      width: 0.68267rem;
      float: left;
      margin-top: 0.6rem;
    }
    p {
      display: block;
      margin-left: 1.2rem;
    }
  }
  .qc {
    text-align: center;
    color: #999;
    font-size: 0.59733rem;
    line-height: 1.96267rem;
  }
}
</style>