<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Content">Home</router-link>
      <router-link to="/Register">Register</router-link>
      <!---<router-link to="/login" >login</router-link>--->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

    };
  },
  mounted() {
    if(this.$store.state.auth === "") {
      //this.$router.replace({ name: "login" });
    }
  }, 
  methods: {
    logout() {
      this.$store.state.auth = "";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 10px 15px 10px 15px;
}

#nav a {
  padding: 3px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(157, 172, 187);
  font-weight: bold;
  margin: 10px 10px 10px 10px;
}

.router-link-exact-active {
  color: red;
}
</style>
