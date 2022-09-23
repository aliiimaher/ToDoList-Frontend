<template>
  <div>
    <h1>Login Page</h1>
    <TextInput></TextInput>
    <TextInput class="input"></TextInput>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";

export default {
  components: {TextInput}
}
</script>

<style scoped>
h1 {
  color: #f0f0f0;
}

.input {
  margin-top: 20px;
}
</style>