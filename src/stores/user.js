import axios from "axios";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  /**
   * variables (state)
   */
  const rawData = reactive([]);
  const users = reactive([]);
  const loaded = reactive({
    users: false,
  });

  /**
   * computed methods (getters)
   */
  const getUserList = computed(() => {
    let list = JSON.parse(JSON.stringify(rawData));
    return list.map((user) => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      };
    });
  });

  /**
   * methods (actions)
   */
  const fetchUserList = async () => {
    loaded.users = false;
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        Object.assign(rawData, res.data);
        Object.assign(users, transformer(rawData));

        loaded.users = true;
      });
  };

  const transformer = (list) => {
    return list.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      };
    });
  };

  return {
    loaded,
    users,
    rawData,
    getUserList,
    fetchUserList,
  };
});
