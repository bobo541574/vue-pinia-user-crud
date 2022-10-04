<template>
  <div>
    <div
      v-for="user in getUserList"
      :key="user.id"
      style="padding: 4px 0 4px 0; text-align: start"
    >
      {{ user.id }}.
      {{ user.name }}
      ({{ user.username }})
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "AboutView",

  setup() {
    /**
     * variables
     */
    const { getUserList } = storeToRefs(useUserStore());

    return {
      getUserList,
    };
  },
};
</script>