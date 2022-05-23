<template>
  <div class="card">
    <div class="photo">
      <img
        :src="data.image"
        onerror="this.src='http://localhost:3000/src/assets/img/img404.jpg';"
      />
    </div>
    <h1>{{ data.name }}</h1>
    <h2></h2>
    <p>{{ data.depict }}</p>
    <!-- <a href="#">了解更多</a> -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
// console.log("props", props);
let data = props.data;
// console.log("data", data);
</script>

<style>
.card {
  /* 相对定位 */
  position: relative;
  width: 200px;
  height: 300px;
  /* margin: 20px; */
  background-color: #758a99;
  border-radius: 20px;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 弹性布局 */
  display: flex;
  /* 元素纵向排列 */
  flex-direction: column;
  /* 居中 */
  align-items: center;
  color: #fff;
  /* 阴影 */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  /* 不让其被挤压 */
  flex-shrink: 0;
  /* margin-bottom: 20px; */
  margin: 10px 5px;
}
.card .photo img {
  z-index: 15000;
  width: 100%;
  height: 100%;
  /* 保持原有尺寸比例，裁切长边 */
  object-fit: cover;
}
/* 默认大图 */
.card .photo {
  /* 绝对定位 */
  position: absolute;
  z-index: 15000;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0%;
  overflow: hidden;
  /* 动画过渡 */
  transition: 0.5s;
}
/* 鼠标移入变小图 */
.card:hover .photo {
  top: 30px;
  width: 40%;
  height: 27%;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
/* 这里加个黑色到透明的渐变背景，可以更好的看清楚名字 */
.card .photo::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, #222);
}
.card h1 {
  position: absolute;
  top: 82%;
  transition: 0.5s;
}
.card:hover h1 {
  top: 38%;
}
.card h2 {
  position: absolute;
  top: 50%;
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 20px;
  text-align: center;
  margin-bottom: 4.5%;
  padding-bottom: 4.5%;
}
.card p {
  position: absolute;
  top: 62%;
  width: 90%;
  text-indent: 32px;
  font-size: 16px;
  margin-bottom: 3.3%;
  line-height: 30px;
}
.card a {
  position: absolute;
  bottom: 1%;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1.8% 11%;
  border-radius: 8px;
}
.card a:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>