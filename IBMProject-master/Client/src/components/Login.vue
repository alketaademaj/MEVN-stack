<template>
  <div class="form-group">
    <h1>Kirjaudu sisään</h1>
    <input type="text" name="username" v-model="input.username" placeholder="kirjoita tunnus" />
    <br />
    <br />
    <input type="password" name="password" v-model="input.password" placeholder="kirjoita salasana" />
    <br />
    <br />
    <button class="submit-btn" v-on:click="login">Kirjaudu</button>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    if(this.$store.state.auth !== "") {
      this.$router.replace({ name: "content" });
    }
  },
  
  // define methods under the `methods` object
  methods: {
    login() {
      if(this.input.username !== "" && this.input.username.password !== "") {
        this.serverReq(this.input);
      }
    },
    serverReq(data) {
      const url = 'http://localhost:3000/api/user/login';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(url, options).then(response => response.json().then(val => this.$store.state.auth = val.token).then(() => {this.$router.replace({ name: "content" }); console.log(this.$store.state.auth);}))
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
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
.submit-btn {
  background-color: #55ad44;
  border: 2px solid #55ad44;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
  font-size: 16px;
  margin-top: 10px;
}
.submit-btn:active {
  background-color: #55ad44;
  box-shadow: 0 5px grey;
  transform: translateY(4px);
}
.submit-btn:hover {
  background: #55ad44;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
</style>