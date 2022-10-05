<template>
  <div class="not-found">
    <div class="text">
      <strong>Oops!</strong>
      <div>Something Went Wrong :(</div>
    </div>
    <div class="ill">
      <img src="../assets/ills/Ill-NotFound.svg" alt="404" class="test" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin-left: auto;
  margin-right: auto;
}

.text {
  font-family: sans-serif;
  font-size: 16px;
  color: #f0f0f0;
  text-align: center;
  padding-top: 120px;
  padding-bottom: 40px;
}

.not-found {
  /* display: flex; */
  align-items: center;
  align-content: center;
}

.test {
  display: block;
}
</style>
