<template>
  <div @click="goTodos" class="container">
    <div>
      <h5>{{ title }}</h5>
    </div>
    <div>
      <img @click="deleteList" src="../assets/trash.svg" class="icon" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",

  props: {
    title: {},
    itemId: {},
    deleteItem: {},
  },
  methods: {
    deleteList() {
      axios
        .delete(`/list/${this.itemId}/`)
        .then((response) => {
          console.log(response);
          this.deleteItem();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goTodos() {
      this.$router.push(`/todos/${this.itemId}`);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 272px;
  background-color: #2b3246;
  height: 40px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

* {
  color: #f0f0f0;
}

h5 {
  font-size: 14px;
  padding-left: 8px;
  padding-top: 13px;
  margin: 0;
}

.icon {
  /*margin-right: auto;*/
  padding-top: 10px;
  padding-right: 12px;
}
</style>
