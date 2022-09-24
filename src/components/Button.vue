<template>
  <div>
    <button>{{ name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
  },
};
</script>

<style scoped>
button {
  background: linear-gradient(94.85deg, #246bfd 2.76%, #891bd3 99.01%);
  border-radius: 8px;
  border: none;
  padding: 10px 128px;
  font-family: sans-serif;
  color: #f0f0f0;
  /*it is hardcoded and wrong change it as soon as possible*/
  width: 340px;
}
</style>
