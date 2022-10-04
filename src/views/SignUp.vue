<template>
  <div class="container">
    <div class="illustration">
      <img src="../assets/Illustration-signup.svg" alt="" />
    </div>
    <div class="form">
      <h1>SignUp</h1>
      <TextInput
        placeholder="Username"
        :icon="require('../assets/icons/person.svg')"
        class="input"
      ></TextInput>
      <TextInput
        placeholder="Password"
        :icon="require('../assets/icons/Subtract.svg')"
        type="password"
        class="input"
      ></TextInput>
      <TextInput
        placeholder="Email"
        :icon="require('../assets/icons/Email.svg')"
        class="input"
      ></TextInput>
      <Button name="Sign Up" class="btn"></Button>
      <a href="/login">
        <div class="already-register">Already has an account? Log In</div>
      </a>
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

.already-register {
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #f0f0f0;
  margin: 16px 0px;
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
  margin-top: 20px;
}
</style>
