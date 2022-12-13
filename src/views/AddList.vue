<template>
  <div class="container">
    <TextInput placeholder="Name" v-model="name"></TextInput>
    <Button1 @click="addTodo" class="btn" name="Add +"></Button1>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button1 from "@/components/Button1.vue";
import axios from "axios";

export default {
  components: {
    TextInput,
    Button1,
  },
  data() {
    return {
      name: {},
    };
  },
  methods: {
    addTodo() {
      console.log(this.name);

      const formData = {
        name: this.name,
      };
      axios
        .post("/lists/", formData)
        .then((response) => {
          console.log(response);
          this.lists = response.data;
          this.$router.push("/lists");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 30px;
}

.btn {
  padding-top: 30px;
  text-align: center;
}
</style>
