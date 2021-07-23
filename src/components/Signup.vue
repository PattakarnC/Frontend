<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome</h1>
                        <h3
                          class="text-center my-4"
                        >If you already have an account, please sign in!</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--" to="/">Sign in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <v-form>
                          <v-select
                            v-model="user.gender"
                            :items="['Male', 'Female']"
                            label="Gender"
                            prepend-icon="fas fa-venus-mars"
                            color="teal accent-3"
                          >
                            <template v-slot:item="{ item, attrs, on }">
                              <v-list-item
                                v-bind="attrs"
                                v-on="on"
                                color="teal accent-3"
                              >
                                <v-list-item-title
                                  :id="attrs['aria-labelledby']"
                                  v-text="item"
                                  color="teal accent-3"
                                ></v-list-item-title>
                              </v-list-item>
                            </template>
                          </v-select>

                          <v-text-field
                            v-model="user.display_name"
                            :rules="inputRules"
                            label="Name"
                            name="Name"
                            prepend-icon="face"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="user.age"
                            :rules="inputRules"
                            label="Age"
                            name="Age"
                            prepend-icon="accessibility"
                            type="text"
                            color="teal accent-3"
                          />
                           <v-text-field
                             v-model="user.weight"
                             :rules="inputRules"
                             id="Weight"
                             label="Weight"
                             name="weight"
                             prepend-icon="opacity"
                             type="text"
                             color="teal accent-3"
                           />
                          <v-text-field
                            v-model="user.height"
                            :rules="inputRules"
                            id="Height"
                            label="Height"
                            name="height"
                            prepend-icon="height"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="user.username"
                            :rules="inputRules"
                            id="Username"
                            label="Username"
                            name="username"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="user.password"
                            :rules="inputRules"
                            id="Password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10">
                        <v-btn rounded color="teal accent-3" dark @click="handleRegister" >SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<!--<script>-->
<!--import Vue from "vue";-->

<!--export default {-->
<!--  name: "Signup",-->
<!--  data: () => ({-->
<!--    step: 1,-->
<!--    valid: true,-->
<!--    username: "",-->
<!--    password: "",-->
<!--    gender: "",-->
<!--    display_name: "",-->
<!--    weight: "",-->
<!--    height: "",-->
<!--    age: "",-->


<!--  }),-->
<!--  methods: {-->
<!--    async submit() {-->
<!--      if (this.$refs.form.validate()) {-->
<!--        // submit to backend to authenticate-->
<!--        let formData = new FormData();-->
<!--        formData.append("username", this.username);-->
<!--        formData.append("password", this.password);-->
<!--        formData.append("gender", this.gender);-->
<!--        formData.append("display_name", this.display_name);-->
<!--        formData.append("weight", this.weight);-->
<!--        formData.append("height", this.height);-->
<!--        formData.append("age", this.age);-->


<!--        let respond = await Vue.axios.post("/api/signup", formData);-->
<!--        if (respond.data.success) {-->
<!--          await this.$router.push({ path: "/home" });-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--  props: {-->
<!--    source: String,-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped>

</style>

<!--<script>-->
<!--import Vue from "vue";-->

<!--export default {-->
<!--  name: "SignUp",-->
<!--  props: {-->
<!--    source: String-->
<!--  },-->
<!--  data: () => ({-->
<!--    valid: true,-->
<!--    username: '',-->
<!--    password: '',-->
<!--    step :1,// exist-->
<!--    usernameRules:[v => !!v || 'Username is required'],-->
<!--    passwordRules:[v => !!v || 'Username is required'],-->
<!--    nameRules: [-->
<!--      v => !!v || 'Name is required',-->
<!--      v => (v && v.length <= 10) || 'Name must be less than 10 characters',-->
<!--    ],-->
<!--    // email: '',-->
<!--    // emailRules: [-->
<!--    //   v => !!v || 'E-mail is required',-->
<!--    //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',-->
<!--    // ],-->
<!--    // select: null,-->
<!--    // items: [-->
<!--    //   'Item 1',-->
<!--    //   'Item 2',-->
<!--    //   'Item 3',-->
<!--    //   'Item 4',-->
<!--    // ],-->
<!--    // checkbox: false,-->
<!--  // }),-->
<!--//This is a method that take information as a link .validate,... into this methods-->
<!--  methods: {-->
<!--    async submit() {-->
<!--      if (this.$refs.form.validate()) {-->
<!--        // submit to backend to authenticate-->
<!--        let formData = new FormData();-->
<!--        formData.append("username", this.username);-->
<!--        formData.append("password", this.username);-->
<!--        let respond = await Vue.axios.post("/api/login", formData);-->
<!--        if (respond.data.success) {-->
<!--          await this.$router.push({ path: "/" });-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
<script>

import User from '../models/user';
// import NavBar from './NavBarBeforeLogin'

export default {
  name: 'Signup',
  // components: {
  //   NavBar
  // },
  data() {
    return {
      // username: "",
      // password: "",
      // gender: "",
      // display_name: "",
      // weight: "",
      // height: "",
      // age: "",
      user: new User("", "","","",""),
      submitted: false,
      successful: false,
      message: '',
      inputRules: [v => !!v || 'This field is required'],
      isValid: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = data.message;
          this.successful = true;
          this.$router.push('/login');
        },
        error => {
          this.message = error.message;
          this.successful = false;
        }
      );
    }
  }
};
</script>