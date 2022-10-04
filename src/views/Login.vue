<template>
  <div class="container">
    <div class="form">
      <h1>Login</h1>
      <TextInput
        placeholder="Username"
        :icon="require('../assets/icons/person.svg')"
      ></TextInput>
      <TextInput
        placeholder="Password"
        :icon="require('../')"
        type="password"
        class="input"
      ></TextInput>
      <Button name="Login" class="btn"></Button>
    </div>
    <div class="illustration">
      <img src="../assets/Illustration-login.svg" alt="" />
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

export default {
  components: { Button, TextInput },
};
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
  padding: 220px 0;
}

.illustration {
  padding-left: 170px;
}

.form {
  padding-left: 230px;
}

.input {
  margin-top: 20px;
}

.btn {
  width: 100%;
  margin-top: 20px;
}
</style>
