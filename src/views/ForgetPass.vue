<template>
  <div class="forget-pass">
    <div class="title">Forget Your Password? NP :)</div>
    <div class="main-content">
      <div class="function">
        <TextInput
          placeholder="Email"
          :icon="require('../assets/icons/Email.svg')"
          class="input"
        >
        </TextInput>
        <Button1 name="Submit"></Button1>
      </div>
      <div class="ill">
        <img src="../assets/ills/Ill-ForgetPass.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
import Button1 from "@/components/Button1";
export default {
  components: { TextInput, Button1 },
};
</script>

<style scoped>
.title {
  font-family: sans-serif;
  color: #f0f0f0;
  text-align: center;
  padding-top: 120px;
  margin-bottom: 160px;
}

.function {
  margin-right: 160px;
}

.input {
  margin-bottom: 16px;
}

.ill {
  display: block;
  margin-left: 0;
}

* {
  margin-left: auto;
  margin-right: auto;
}

.main-content {
  display: flex;
  align-items: center;
}
</style>
