<template>
  <div class="container">
    <div>
      <h5>{{ title }}</h5>
    </div>
    <div>
      <img src="../assets/trash.svg" class="icon" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "List",

  props: {
    title: {},
  },
};
</script>

<style scoped>
.container {
  background-color: #2b3246;
  height: 40px;
  border-radius: 8px;
  width: 70%;
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
