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
  text-align: center;
  /* padding: 10px 128px; */
  font-family: sans-serif;
  font-size: 16px;
  color: #f0f0f0;
  /*it is hardcoded and wrong change it as soon as possible*/
  width: 320px;
  height: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
}
</style>
