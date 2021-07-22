import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import UserStat from "../components/UserStat";
import Exercise from "@/components/Exercise";
import Home from "../components/Home";
import Create from "../components/Create";
import VueClock from "@dangvanthanh/vue-clock";
import Bmi from "../components/Bmi"
import Summary from "../components/Summary"


import store from "@/store";


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
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
  {
    path: "/bmi",
    name: "Bmi",
    component: Bmi,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);


  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;


  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login'
      })
    } else {
      next();
    }

  } else {
    next(); // make sure to always call next()!
  }
  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (store.getters.isLoggedIn) {
      next({path: '/'});
    } else {
      next();
    }
  } else {
    next();
  }


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