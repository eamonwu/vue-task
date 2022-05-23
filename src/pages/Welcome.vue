<template>
  <div class="welcome">
    <login></login>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  setup() {},
  components: {
    Login,
  },
};
</script>

<style>
.welcome {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/welcome.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>