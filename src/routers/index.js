import { defineAsyncComponent  } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Auth from "./auth.js"
const Home = () => import("../views/home.vue");
const Login = () => import("../views/login.vue");
const NotFound = () => import("../views/404.vue");
const Test = () => import("../pages/page1.vue");

const routes = [
  /*
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    */
    {
      path: "/test", 
      name: "Test",
      component: Test,
    },
    {
      path: "/:pathMatch(.*)*", // 代替vue2的通配符path: "*",
      name: "NotFound",
      component: NotFound,
    },
    /*
    {
      /*
      path: "/pages/test", // 代替vue2的通配符path: "*",
      name: "xxx",
      component: defineAsyncComponent(() => import("http://localhost/pages/test.js")),
      component: new Promise(function (resolve, reject) {
        import("http://loacalhsot/pages/test.vue")
        console.log(resolve);
        debugger
        //require.async(['pages/test.vue'], resolve);
      }),
    },
      */
  ];
  let cr = function(config){
    return createWebHashHistory()
    //return  createWebHistory("/static")
  }

  export default function(config){
    const router = createRouter({
        history:cr(config),
        routes:routes
    }) 
    Auth(router);
    return router;
  };