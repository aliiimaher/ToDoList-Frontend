<template>
  <div class="container">
    <h1>Login</h1>
    <TextInput placeholder="email"></TextInput>
    <TextInput placeholder="password" class="input"></TextInput>
    <Button name="Login" class="btn"></Button>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

export default {
  components: {Button, TextInput}
}
</script>

<style scoped>
h1 {
  color: #f0f0f0;
}

.container {
  text-align: center;
  margin: auto;
  /*width: 40%;*/
  padding: 140px 0;
}

.input {
  margin-top: 20px;
}

.btn {
  width: 100%;
  margin-top: 20px;
}
</style>