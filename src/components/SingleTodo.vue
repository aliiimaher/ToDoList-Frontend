<template>
  <div class="container">

      <input type="checkbox" class="check">
      <label>{{ title }}</label>

  </div>
</template>

<script>
export default {
  name: "SingleTodo",
  props: {
    title: {}
  }
}
</script>

<style scoped>
* {
  color: #f0f0f0;
}
.container {
  background-color: #2B3246;
  padding-top: 9px;
  height: 30px;
  border-radius: 8px;
  width: 70%;
}
label {
  font-size: 14px;
  padding-left: 8px;
  /*padding-top: 70px;*/
  margin: 0;
}


.check {

}

</style>