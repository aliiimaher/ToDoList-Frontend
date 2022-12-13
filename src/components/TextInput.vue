<template>
  <!-- <div class="whole-input"> -->
  <!-- <div class="icon-place">
      <img :src="icon" class="icon" />
    </div> -->
  <input
    class="whole-input text-place"
    v-model="content"
    @input="handleInput"
    :placeholder="placeholder"
  />
  <!-- :style="{ paddingLeft: icon ? '40px' : '20px' }" -->
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    placeholder: {},
    value: {},
    icon: {},
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
};
</script>

<style scoped>
.text-place {
  background: none;
  color: #f0f0f0;
}

.icon-place {
  display: flex;
  height: 26.66px;
  width: 24px;
  margin: 8px;
  /* margin: 0 0; */
}

icon {
  /* position: absolute; */
  display: flex;
  height: 26.66px !important;
  width: 24px !important;
  margin: 0;
  /* background: #f0f0f0; */
  /* margin-right: 8px;
  margin-left: 8px; */
}

input {
  display: flex;
  /* width: 272px; */
  max-width: 272px;
  height: 40px;
  border-radius: 8px;
  /* color: #f0f0f0; */
  border-style: none;
}

.whole-input {
  display: flex;
  max-width: 272px;
  width: 100%;
  height: 40px;
  background: #2b3246;
  border-radius: 8px;
  /* padding: 8px 8px; */
  /* color: #f0f0f0; */
  margin-left: auto;
  margin-right: auto;
  border-style: none;
  align-items: center;
  /* justify-content: center; */
}

::placeholder {
  color: #f0f0f0;
  opacity: 1; /* Firefox */
}

* {
  font-size: 16px;
  align-content: center;
}

input:focus {
  outline: none;
}
</style>

<!-- <template>
  <div>
    <img :src="icon" class="icon"/>
    <input
        :placeholder="placeholder"
        :style="{ paddingLeft: icon ? '40px' : '20px' }"
        :type="type"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {},
    icon: {},
    type:{},
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
  border-style: none;
}

::placeholder {
  color: #f0f0f0;
  opacity: 1; /* Firefox */
}


  font-size: 16px;
}

input:focus {
  outline:none;
}
</> -->
