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
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h3
                          class="text-center my-4"
                        >To keep connected with us, please sign in!</h3>
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
                            v-model="display_name"
                            label="Name"
                            name="Name"
                            prepend-icon="face"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="age"
                            label="Age"
                            name="Age"
                            prepend-icon="accessibility"
                            type="text"
                            color="teal accent-3"
                          />
                           <v-text-field
                             v-model="weight"
                             id="Weight"
                             label="Weight"
                             name="weight"
                             prepend-icon="opacity"
                             type="text"
                             color="teal accent-3"
                           />
                          <v-text-field
                            v-model="height"
                            id="Height"
                            label="Height"
                            name="height"
                            prepend-icon="height"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="username"
                            id="Username"
                            label="Username"
                            name="username"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="password"
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
                        <v-btn rounded color="teal accent-3" dark @click="handleRegister">SIGN UP</v-btn>
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

<script>
import Vue from "vue";

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


  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // submit to backend to authenticate
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        formData.append("gender", this.gender);
        formData.append("display_name", this.display_name);
        formData.append("weight", this.weight);
        formData.append("height", this.height);
        formData.append("age", this.age);


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