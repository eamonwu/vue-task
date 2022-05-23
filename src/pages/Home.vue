<script setup>
import { ref } from "vue";
import { useGoodsStore } from "../store/goods";
// 获取商品的数据demo
import { goodsData } from "../demo/goodsData";
import { useRouter, useRoute } from "vue-router";
const radio = ref("审查界面");
// 初始化store里的商品数据
let goodsStore = useGoodsStore();
//需要把图片require一下
// goodsData.forEach((item) => {
//   // new URL(item.image, import.meta.url).href
//   console.log("函数执行");
//   goodsData.image = new URL(item.image, import.meta.url).href;
// });
goodsStore.setData(goodsData);
console.log(goodsData);

// 获取路由
const $router = useRouter();
const $route = useRoute();

const toEntry = () => {
  $router.push({
    path: "/home/entry",
  });
};
const toPrev = () => {
  $router.push({
    path: "/home/check",
  });
};
</script>
<template>
  <div class="home">
    <el-radio-group fill="#67c23a" v-model="radio" size="large">
      <el-radio-button label="审查界面" @click="toPrev" />
      <el-radio-button label="入库界面" @click="toEntry" />
    </el-radio-group>
    <router-view name="homeContainer"></router-view>
  </div>
</template>