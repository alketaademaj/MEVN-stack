import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

 /*
const url = 'http://localhost:3000/api/user/login';
// The data we are going to send in our request
let data = {
    username: 'adminadmin',
    password: 'adminadmin'
}

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};
const req = fetch(url, options)
console.log(req);*/