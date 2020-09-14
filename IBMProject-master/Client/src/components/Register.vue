<template>
  <div>
    <h1>Luo käyttäjätiedot</h1>
    <div class="form-group">
      <input type="text" v-model="form.username" id="username" placeholder="Nimi" />
    </div>

    <div class="form-group">
      <input type="password" v-model="form.password" id="password" placeholder="Salasana" />
    </div>

    <div class="form-group">
      <input type="text" v-model="form.email" id="email" placeholder="email@gmail.com" />
    </div>

    <button class="submit-btn" v-on:click="submitAccount">Lisää käyttäjä</button>
  </div>
</template>

<script>
import Joi from "@hapi/joi";

const registerSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(6)
    .max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "fi", "io",] }
  })
});

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: null,
        password: null,
        email: null
      }
    };
  },
  mounted() {
    console.log(this.$store.state.auth);
  },
  methods: {
    submitAccount() {
      const { username, password, email } = this.form;

      if (username && email && password) {
        const validatedNewUser = {
          username,
          email,
          password,
        }
        //Joi Validation
        registerSchema.validate(validatedNewUser)
          .then(result => this.serverReq(result))
          .catch(err => console.log(err))
      } else {
        // missing input field(s)
        alert("täytä kaikki kentät");
      }

    },
    serverReq(data) {
      const url = 'http://localhost:3000/api/user/register';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const req = fetch(url, options);
      console.log(req);
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
.form-group {
  padding: 5px;
}
.form-group input {
  padding: 4px 4px;
  margin: 4px 0px 4px 0px;
}
.form-group small {
  visibility: hidden;
}
.icon-exclamation-circle {
  visibility: hidden;
}
.form-group.success input {
  border-color: #2ecc71;
}
.form-group.error input {
  border-color: #e74c3e;
}
.form-group.error .icon-exclamation-circle {
  visibility: visible;
  color: #e74c3e;
}
.form-group.error small {
  visibility: visible;
  color: #e74c3e;
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