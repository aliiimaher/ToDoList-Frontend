<template>
  <div class="container">
    <div class="check-container">
      <input type="checkbox" class="check">
      <div class="check-div"></div>
    </div>

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
  opacity: 0;
  position: relative;
  z-index: 1;
}

.check-div {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: blue;
  opacity: 1;
  top: 0;
  left: 0;

}

.check:checked + .check-div{
  background-color: red;
}

.check-container{
  float: left;
  position: relative;
}
</style>