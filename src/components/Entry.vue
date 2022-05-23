<template>
  <div class="entry">
    <el-table :data="filterTableData" style="width: 100%" ref="elTableRef">
      <el-table-column type="selection"></el-table-column>
      <el-table-column lable="商品ID" prop="id" />
      <el-table-column label="入库时间" prop="date" />
      <el-table-column label="商品名称" prop="name" />
      <el-table-column label="缩略图" prop="image" align="center">
        <template #default="scope">
          <div></div>
          <img
            :src="scope.row.image"
            min-width="70"
            width="70"
            onerror="this.src='http://localhost:3000/src/assets/img/img404.jpg';"
          />
        </template>
      </el-table-column>
      <el-table-column label="备注/描述" prop="depict" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #header>
          <el-input v-model="search" size="small" placeholder="搜索姓名" />
        </template>
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            出库
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="mt-4"
      style="width: 50%"
      @click="removeRows"
      :style="{ margin: 0 }"
      >一键出库</el-button
    >
    <el-button class="mt-4" style="width: 50%" @click="onAddItem"
      >入库</el-button
    >
    <el-form :inline="true" :model="itemAdd" class="demo-form-inline">
      <el-form-item label="商品id">
        <el-input v-model="itemAdd.id" placeholder="商品id" />
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="itemAdd.name" placeholder="名字" />
      </el-form-item>
      <el-form-item label="描述/备注">
        <el-input v-model="itemAdd.depict" placeholder="描述/备注" />
      </el-form-item>
      <el-form-item label="图片链接">
        <el-input v-model="itemAdd.image" placeholder="图片链接" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, computed, reactive, toRaw } from "@vue/reactivity";
import dayjs from "dayjs";
import { useGoodsStore } from "../store/goods";
const elTableRef = ref(null);
// table数据初始化
const goodsStore = useGoodsStore();
const tableData = reactive(goodsStore.getData());

// 数据的搜索
const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

// 删除数据
function deleteRow(index) {
  tableData.splice(index, 1);
}
const removeRows = () => {
  const selectionRows = elTableRef.value.getSelectionRows();
  let ItemRemove = [];
  selectionRows.forEach((selectionRow) => {
    ItemRemove.push(selectionRow.id);
  });
  let index = -1;
  let tableDataRows = toRaw(tableData);
  console.log(tableDataRows);
  for (let i = tableDataRows.length - 1; i >= 0; i--) {
    index = ItemRemove.indexOf(tableDataRows[i].id);
    if (index != -1) {
      tableData.splice(i, 1);
    }
  }
};

// 添加新的数据
let itemAdd = reactive({
  id: null,
  name: null,
  depict: null,
  image: null,
});
function onAddItem() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  tableData.push({
    id: itemAdd.id || Math.ceil(Math.random() * 90000) + 10000,
    date: dayjs(now).format("YYYY-MM-DD"),
    name: itemAdd.name,
    depict: itemAdd.depict,
    image: itemAdd.image || "http://图片地址都不写?",
  });
}
</script>

<style>
.entry {
  width: 1200px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.05);
}
.el-button + .el-button {
  margin: 0 0;
}
</style>