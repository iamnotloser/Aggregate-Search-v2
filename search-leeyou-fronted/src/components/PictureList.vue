<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
    item-layout="horizontal"
    :data-source="data.pictureList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable >
          <template #cover>
            <img alt="example" :src="item.url" />
          </template>
          <a-card-meta :title="item.userName">
            <template #description>{{ item.title }}</template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup lang="ts">
import { toRefs, withDefaults, defineProps } from "vue";
import teammate from "../assets/teammate.jpg";

interface DataItem {
  pictureList: any[];
}

const data = withDefaults(defineProps<DataItem>(), {
  pictureList: () => [],
});
</script>
<style scoped></style>
