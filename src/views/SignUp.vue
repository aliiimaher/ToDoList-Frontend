<template>
  <div class="container">
    <h1>SignUp</h1>
    <TextInput placeholder="name" class="input"></TextInput>
    <TextInput placeholder="last name" class="input"></TextInput>
    <TextInput placeholder="email" class="input"></TextInput>
    <TextInput placeholder="password" class="input"></TextInput>
    <Button n></Button>

  </div>

</template>

<script>
import TextInput from "@/components/TextInput";
import

export default {
  components: {TextInput}
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
</style>