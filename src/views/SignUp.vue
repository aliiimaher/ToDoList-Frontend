<template>
  <div class="container">
    <div class="illustration">
      <img src="../assets/Illustration-signup.svg" alt="" />
    </div>
    <form @submit.prevent="submitForm">
      <div class="form">
        <h1>SignUp</h1>
        <TextInput
          v-model="username"
          placeholder="Username"
          :icon="require('../assets/icons/person.svg')"
          class="input"
        ></TextInput>
        <TextInput
          v-model="password"
          placeholder="Password"
          :icon="require('../assets/icons/Subtract.svg')"
          type="password"
          class="input"
        ></TextInput>
        <TextInput
          v-model="email"
          placeholder="Email"
          :icon="require('../assets/icons/Email.svg')"
          class="input"
        ></TextInput>
        <Button1 name="Sign Up" class="btn" @click="submitForm"></Button1>
        <a href="/login">
          <div class="already-register">Already has an account? Log In</div>
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
import Button1 from "@/components/Button1";
import axios from "axios";

export default {
  components: { Button1, TextInput },
  data() {
    return {
      username: {},
      password: {},
      email: {},
    };
  },
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password1: this.password,
        password2: this.password,
        email: this.email,
        full_name: "mehdi",
      };
      // console.log(formData);
      // debugger;
      console.log(formData);
      axios
        .post("/signup/", formData)
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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
  /* display: flex; */
  text-align: center;
  margin: auto;
  /*width: 40%;*/
  padding: 50px 0;
}
.form {
  margin: auto !important;
}

.input {
  margin-top: 20px;
}

.illustration {
  overflow: hidden;
}
img {
  width: 100%;
}

.btn {
  margin-top: 20px;
}
@media screen and (min-width: 600px) {
  .container {
    display: flex;
    justify-content: space-around;
    gap: 50px;
    padding: 220px 0;
  }
  form {
    width: 50%;
  }
}
</style>
