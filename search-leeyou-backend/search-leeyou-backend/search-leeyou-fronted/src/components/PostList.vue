<template>

  <a-list item-layout="horizontal" :data-source="data.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.content">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar :src="teammate" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup lang="ts">
import { toRefs, withDefaults, defineProps } from "vue";
import teammate from "../assets/teammate.jpg"
interface DataItem {
  postList: any[];
}

const data = withDefaults(defineProps<DataItem>(), {
  postList: () => [],
});
</script>
<style scoped></style>
