<template>
  <div>
    <img :src="icon" class="icon" />
    <input
      :placeholder="placeholder"
      :style="{ paddingLeft: icon ? '40px' : '20px' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {},
    icon: {},
  },
};
</script>

<style scoped>
input {
  width: 320px;
  height: 40px;
  background: #2b3246;
  border-radius: 8px;
  color: #f0f0f0;
}
::placeholder {
  color: #f0f0f0;
  opacity: 1; /* Firefox */
}

* {
  font-size: 16px;
}
</style>
