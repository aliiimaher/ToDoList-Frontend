<template>
  <div class="main-container">
    <div class="container">
      <div v-for="(item, index) in lists" :key="index">
        <List
          :deleteItem="() => deleteItem(index)"
          :itemId="item.id"
          :title="item.name"
        />
        <br />
      </div>
    </div>
    <div class="button">
      <Button1 @click="addList" name="Add Todo"></Button1>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Button1 from "@/components/Button1.vue";
import axios from "axios";

export default {
  name: "Lists",
  components: { List, Button1 },
  data() {
    return {
      // lists: ["list1", "list2", "list3", "list4", "list5"],
      lists: {},
    };
  },
  async beforeMount() {
    axios
      .get("/lists/")
      .then((response) => {
        console.log(response);
        this.lists = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.lists);
  },
  methods: {
    addList() {
      this.$router.push("/add-list/");
    },
    deleteItem(item) {
      this.lists = [
        ...this.lists.slice(0, item),
        ...this.lists.slice(item + 1),
      ];
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.main-container {
  margin-top: 120px;
}

.button {
  /* margin: 0 auto; */
  text-align: center;
}
</style>
