<template>
  <a-list item-layout="horizontal" :data-source="data.userList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable style="width: 240px">
          <template #cover>
            <img alt="example" :src="item.userAvatar" />
          </template>
          <a-card-meta :title="item.userName">
            <template #description>{{ item.userProfile }}</template>
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
  userList: any[];
}

const data = withDefaults(defineProps<DataItem>(), {
  userList: () => [],
});
</script>
<style scoped></style>
