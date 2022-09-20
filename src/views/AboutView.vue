<template>
  <div class="about">
    <TextInput
      placeholder="javad"
      :icon="require('../assets/icons/person.svg')"
    ></TextInput>
    <h1>This is an about page</h1>
    <Button :name="name1"></Button>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";
export default {
  components: { TextInput, Button },
  data() {
    return {
      name1: "kdjsklfjsdjfkldsklfjos",
    };
  },
};
</script>
