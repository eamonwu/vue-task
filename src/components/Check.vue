<template>
  <div class="check">
    <Card v-for="item in data" :key="item.index" :data="item"></Card>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import { useGoodsStore } from "../store/goods";

const goodsStore = useGoodsStore();
const data = goodsStore.getData();
</script>

<style>
.check {
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>