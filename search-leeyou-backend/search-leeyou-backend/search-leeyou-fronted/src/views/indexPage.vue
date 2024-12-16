<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searchText"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />

    <my-divider />
    <a-tabs v-model:activeKey="activeKey" @change="onTabchange">
      <a-tab-pane key="post" tab="博客">
        <PostList :postList="postList" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="相册" force-render>
        <PictureList :pictureList="pictureList" />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList :userList="userList" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import PostList from "@/components/PostList.vue";
import PictureList from "@/components/PictureList.vue";
import UserList from "@/components/UserList.vue";
import MyDivider from "@/components/MyDivider.vue";

import { useRoute, useRouter } from "vue-router";
import myaxios from "@/plugins/my-axios";
import { message } from "ant-design-vue";

const router = useRouter();
// const searchText = ref("");
const route = useRoute();
const activeKey = route.params.category;
const initSearchParams = {
  text: "",
  type: activeKey,
  pagesize: 10,
  pageNum: 1,
};
const searchText = ref(route.query.text || "");
const postList = ref([]);
const userList = ref([]);
const pictureList = ref([]);

/**
 * 加载聚合数据
 * @param params
 */
const loadAllData = (params: any) => {
  const query = {
    ...params,
    searchText: params.text,
  };
  myaxios.post("/search/all", query).then((res) => {
    postList.value = res.postList;
    pictureList.value = res.pictureList;
    userList.value = res.userList;
    console.log(res.records);
  });
};
/**
 * 加载单类数据
 * @param params
 */

const loadData = (params: any) => {
  const { type = "post" } = params;
  if (!type) {
    message.error("类别为空");
    return;
  }
  const query = {
    ...params,
    searchText: params.text,
  };
  myaxios.post("/search/all", query).then((res: any) => {
    if (type === "post") {
      postList.value = res.dataList;
    } else if (type === "picture") {
      pictureList.value = res.dataList;
    } else if (type === "user") {
      userList.value = res.dataList;
    }
  });
};

const searchParams = ref(initSearchParams);
watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text,
    type: route.params.category,
  } as any;
  loadData(searchParams.value);
});

const onSearch = (value: string) => {
  router.push({
    query: {
      ...searchParams.value,
      text: value,
    },
  });

};
const onTabchange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
};
</script>
<style scoped></style>
