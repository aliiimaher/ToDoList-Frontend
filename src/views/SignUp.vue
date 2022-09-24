<template>


  <div class="container">
    <div>
      <img src="../assets/Illustration-signup.svg" alt="">
    </div>
    <div class="form">
      <h1>SignUp</h1>
      <TextInput placeholder="user name" class="input"></TextInput>
      <TextInput placeholder="password" type="password" class="input"></TextInput>
      <TextInput placeholder="email" class="input"></TextInput>
      <Button name="Sign Up" class="btn"></Button>
    </div>
  </div>

</template>

<script>
import TextInput from "@/components/TextInput";
import Button from "@/components/Button"

export default {
  components: {Button, TextInput}
}
</script>

<style scoped>
h1 {
  color: #f0f0f0;
}

.container {
  display: flex;
  text-align: center;
  margin: auto;
  /*width: 40%;*/
  padding: 140px 0;
}

.input {
  margin-top: 20px;
}

.btn {
  margin-top: 20px;
}
</style>