import Vue from "vue";
import Router from "vue-router";
//import kaikki luodut sivut
import Register from "./components/Register.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
import LoginComponent from "./components/Login.vue";
import SecureComponent from "./components/Secure.vue";
import createrecipe from "./components/createrecipe.vue";
import Fridge from "./components/Fridge.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: '/',
        redirect: {
          name: "login"
        }
      },
      {
        path: "/login",
        name: "login",
        component: LoginComponent
      },
      {
        path: "/secure",
        name: "secure",
        component: SecureComponent
      },
      {
        path: "/content",
        name: "content",
        component: Content
      },
      {
        path: "/register",
        name: "register",
        component: Register
      },
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/createrecipe",
        name: createrecipe,
        component: createrecipe
      },
      {
        path: "/Fridge",
        name: Fridge,
        component: Fridge
      },
    ]
  });