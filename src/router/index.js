import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import UserStat from "../components/UserStat";
// import Summary from "../components/Summary";
import Exercise from "@/components/Exercise";
import Home from "../components/Home";
import Create from "../components/Create";
import VueClock from "@dangvanthanh/vue-clock";
// import store from "@/store";


Vue.use(VueClock);

Vue.use(VueRouter);

const routes = [
  // {
  //   // path: "/",
  //   // name: "Home",
  //   // component: Home,
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  // {
  //   path: "/stat",
  //   name: "Stat",
  //   component: UserStat
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/exercise",
    name: "Exercise",
    component: Exercise,
  },
];

const router = new VueRouter({
  routes,
});

// // Setup beforeEach hook to check the logged in sync the logging states with backend
// router.beforeEach(async (to, from, next) => {
//   // get login state using whoami and axios
//   let response = await Vue.axios.get("/api/whoami");
//   // response.data is our payload
//   // vuex store dispatch method is asynchronous so we need to await it
//   // eslint-disable-next-line no-undef
//   await store.dispatch("setLoggedInUser", response.data);
//   // eslint-disable-next-line no-undef
//   let isLoggedIn = store.state.isLoggedIn;
//   // make sure if user is logged, user will not be able to see login page
//   if (to.name === "Login" && isLoggedIn) {
//     next( {name: "Home"});
//   }
//   // if the name of the router is not Login, it needs authorization to access the page
//   if (to.name !== "Login" && !isLoggedIn) {
//     // redirect to login page
//     next({ name: "Login" });
//   } else {
//     // otherwise, let go
//     next();
//   }
// });

export default router;