<template>
  <div class="outline">
    <div class="_head" v-for="(head,index) in jqbook" :key="'jqbook'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in hotspe" :key="'hotspe'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="nbook"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in Master" :key="'Master'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in Chinese" :key="'Chinese'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in diffuse" :key="'diffuse'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="nbook"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in hotserial" :key="'hotserial'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in thediffuse" :key="'thediffuse'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="nbook"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in cartoon" :key="'cartoon'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
    <div class="_head" v-for="(head,index) in newest" :key="'newest'+index">
      <span class="n">{{head.title}}</span>
      <div
        class="book"
        @click="routerApi(book.obj_id,book.type)"
        v-for="(book,i) in head.data"
        :key="i"
      >
        <div class="tup">
          <img :src="book.cover" alt />
        </div>
        <span class="booktit">{{book.title}}</span>
        <span class="subtit">{{book.sub_title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "outline",
  props: ["bookdata"],
  data: () => ({}),
  computed: {
    jqbook() {
      return this.bookdata.filter(item => item.sort === 3);
    },
    hotspe() {
      return this.bookdata.filter(item => item.sort === 5);
    },
    Master() {
      return this.bookdata.filter(item => item.sort === 7);
    },
    Chinese() {
      return this.bookdata.filter(item => item.sort === 8);
    },
    diffuse() {
      return this.bookdata.filter(item => item.sort === 9);
    },
    hotserial() {
      return this.bookdata.filter(item => item.sort === 10);
    },
    thediffuse() {
      return this.bookdata.filter(item => item.sort === 11);
    },
    cartoon() {
      return this.bookdata.filter(item => item.sort === 12);
    },
    newest() {
      return this.bookdata.filter(item => item.sort === 13);
    }
  },
  methods: {
    routerApi(i, type) {
      if (type == 1) {
        this.$router.push({ path: "/details", query: { key: i } });
      } else if (type == 7) {
        this.$router.push("/dmzj/article/show/v2/65139.html");
      } else if (type == 5) {
        this.$router.push({ path: "/weekly", query: { key: i } });
      } else if (type == 8) {
        this.$router.push({ path: "/writer", query: { key: i } });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.outline {
  width: 100%;
  ._head {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.6rem;
  }
}
.n {
  display: block;
  width: 100%;
  height: 1.6rem;
  align-self: auto;
}
.book {
  width: 33%;
}
.nbook {
  width: 50%;
}
.tup {
  margin: 0.3rem;
  margin-bottom: 0;
}
img {
  width: 100%;
}
.booktit {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  font-size: 0.6rem;
  margin-left: 0.3rem;
  padding-right: 0.3rem;
  display: block;
  color: #000;
  box-sizing: border-box;
}
.subtit {
  font-size: 0.4rem;
  margin-left: 0.3rem;
  display: block;
}
</style>