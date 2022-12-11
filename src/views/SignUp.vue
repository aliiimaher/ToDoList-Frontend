<template>
  <div class="container">
    <div class="illustration">
      <img src="../assets/Illustration-signup.svg" alt="" />
    </div>
    <form @submit.prevent="submitForm">
      <div class="form">
        <h1>SignUp</h1>
        <TextInput
          v-model="this.username"
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
        <Button1 name="Sign Up" class="btn" @click="submitForm()"></Button1>
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
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        username: "ewerw",
        password1: "jjj",
        password2: "jss",
        email: "werwer.mortazavian@gmail.com",
        full_name: "mehdi",
      };
      // console.log(formData);
      axios
        .post("/signup/", {
          username: "sfsfs",
          password1: "coskesh",
          password2: "coskesh",
          email: "sfsfsfsf.mortazavian@gmail.com",
          full_name: "sfsfsfssf",
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/");
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
