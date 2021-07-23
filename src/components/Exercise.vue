<template>
  <v-app id="inspire">
    <v-content>
      <template>
        <nav>
          <v-app-bar flat app color="grey darken-4" dense dark>
            <v-btn to="/home">
              <v-icon>home</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/">
              <v-icon color="white-text">LOG OUT</v-icon>
            </v-btn>
          </v-app-bar>
        </nav>
      </template>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1 my-7">Exercise</h1>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3 mb-10">Did you exercise?</h1>
                        <v-form class="my-10">

                          <v-combobox
                            v-model="exerciseType"
                            :items="exerciseTypes"
                            label="What kind of exercise?"
                            dense
                            clearable
                          ></v-combobox>
                          <v-combobox
                            v-model="duration"
                            :items="durations"
                            label="How long did you exercise? (in hours)"
                            dense
                            clearable
                          ></v-combobox>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10 ">
                        <v-btn @click="postBurnedCal" rounded color="teal accent-3" dark to="/bmi">NEXT</v-btn>
<!--                        to="/summary"-->
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
// import Vue from "vue";

// import axios from "axios";
import UserService from "@/services/user.service";

export default {
  name: "Exercise", // name the component

  mounted() {
    if (this.exerciseType == "No exercise") {
      this.burnedCal = 0*this.duration
    }
    else if (this.exerciseType == "Walking") {
      this.burnedCal = 100*this.duration
    }
    else if (this.exerciseType == "Running") {
      this.burnedCal = 200*this.duration
    }
  },

  data()  {
    return {
      exerciseType: [],
      exerciseTypes: [
        "No exercise",
        "Walking",
        "Running"
      ],
      duration: [],
      durations: [0, 0.5, 1, 1.5, 2],
      burnedCal:0,
    };
  },
  methods: {
    postBurnedCal() {
      UserService.postBurnedCal(this.$store.state.auth.user, this.burnedCal)
    },

    handleLogout() {
      this.$store.dispatch('auth/logout', this.user).then(
        () => {
          this.$router.push('/');
        }
      );
    }
  },

    // async submit() {
    //   if (this.$refs.form.validate()) {
    //     // submit to backend to authenticate
    //     let formData = new FormData();
    //     formData.append("No exercise", );
    //     formData.append("Walking", );
    //     formData.append("Running", );
    //
    //     let response = await Vue.axios.post("/api/login", formData);
    //
    //     if (response.data.success) {
    //       await this.$router.push({ name: "/" });
    //     }
    //   }
    // },
  }
}
</script>

<style scoped>

</style>