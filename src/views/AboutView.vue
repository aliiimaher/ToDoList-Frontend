<template>
  <div class="about">
    <TextInput
      placeholder="javad"
      :icon="require('../assets/icons/person.svg')"
    ></TextInput>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
export default {
  components: { TextInput },
};
</script>
