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
        :icon="require('../assets/icons/Subtract.svg')"
        type="password"
        class="input"
      ></TextInput>
      <div class="forget-password">Forget Password?</div>
      <Button name="Login" class="btn"></Button>
      <a href="/signup">
        <div class="new-user">New User? Sign Up</div>
      </a>
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

.new-user {
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #f0f0f0;
  margin: 16px 0px;
}

.forget-password {
  text-align: right;
  font-family: sans-serif;
  font-size: 12px;
  color: #f0f0f0;
  margin: 16px 8px;
  font-weight: 400;
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
  /* margin-top: 20px; */
}
</style>
