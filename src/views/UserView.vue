<template>
  <div v-if="loaded.users" style="display: flex; justify-content: space-around">
    <div>
      <div
        v-for="user in userList"
        :key="user.id"
        style="padding: 4px 0 4px 0; text-align: start"
      >
        {{ user.id }}.
        {{ user.name }}
        ({{ user.username }})
      </div>
    </div>
    <div>
      <div
        v-for="user in users"
        :key="user.id"
        style="padding: 4px 0 4px 0; text-align: start"
      >
        {{ user.id }}.
        {{ user.name }}
        ({{ user.username }})
      </div>
    </div>
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
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";

export default {
  setup() {
    /**
     * variables
     */
    const { getUserList } = storeToRefs(useUserStore());
    const { loaded, users, fetchUserList } = useUserStore();

    /**
     * mounted function
     */
    onMounted(() => {
      fetchUserList();
    });

    const userList = computed(() => {
      return users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: `${user.username} (${user.phone})`,
          email: user.email,
          phone: user.phone,
        };
      });
    });

    return { loaded, users, userList, getUserList };
  },
};
</script>
