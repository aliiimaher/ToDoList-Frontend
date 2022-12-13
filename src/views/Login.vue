<template>
  <div class="container">
    <div class="illustration">
      <img src="../assets/Illustration-login.svg" alt="" />
    </div>
    <div class="form">
      <h1>Login</h1>
      <TextInput
        v-model="username"
        placeholder="Username"
        :icon="require('../assets/icons/person.svg')"
      ></TextInput>
      <TextInput
        v-model="password"
        placeholder="Password"
        :icon="require('../assets/icons/Subtract.svg')"
        type="password"
        class="input"
      ></TextInput>
      <div class="forget-password" onclick="location.href='/forgetpassword';">
        Forget Password?
      </div>
      <Button1 @click="login" name="Login" class="btn"></Button1>
      <a href="/signup">
        <div class="new-user">New User? Sign Up</div>
      </a>
    </div>
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
    };
  },

  methods: {
    login() {
      const formData = {
        username: this.username,
        password: this.password,
      };
      console.log(formData);
      axios
        .post("/login/", formData)
        .then((response) => {
          console.log(response);
          const access = response.data.access;

          this.$store.commit("setAccess", access);
          axios.defaults.headers.common["Authorization"] = access;
          localStorage.setItem("access", access);
          this.$router.push("/");

          // localStorage.setItem("access", response.data.access);
          // this.$store.commit("setAccess", response.data.access);
          // this.$router.push("/lists");
          // console.log(this.$store.state.access);
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
  cursor: pointer;
}

.container {
  text-align: center;
  margin: auto;
  /*width: 40%;*/
  padding: 50px 0;
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
  width: 100%;
  /* margin-top: 20px; */
}
@media screen and (min-width: 600px) {
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 50px;
    padding: 220px 0;
  }
  .form {
    width: 50%;
  }
}
</style>
