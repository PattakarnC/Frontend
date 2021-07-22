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
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1
                          class="
                            text-center
                            display-2
                            teal--text
                            text--accent-3
                            mb-10
                          "
                        >
                          Welcome, ${this.username}
                        </h1>
                        <v-data-table
                          :headers="headers"
                          :items="dates"
                          :items-per-page="5"
                          class="elevation-1"
                        ></v-data-table>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <div class="app text-center my-16">
                        <vue-clock />
                      </div>
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center my-4">Create New Activity</h1>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          dark
                          @click="step++"
                          to="/create"
                          >CREATE</v-btn
                        >
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
// import axios from "axios";

export default {
  data: () => ({
    step: 1,
    valid: true,
    username: "",
    password: "",
    usernameRules: [(v) => !!v || "Username is required"],
    passwordRules: [(v) => !!v || "Password is required"],
    headers: [
      {
        text: "Date",
        align: "start",
        sortable: true,
        value: "date",
      },
      { text: "Consumed calories", value: "consumed" },
      { text: "Burned calories", value: "burned" },
      { text: "Suggestion", value: "suggest" },
    ],
    dates: [
      {
        date: "Frozen Yogurt",
        consumed: 159,
        burned: 6.0,
        suggest: 4.0,
      },
      {
        date: "Frozen Yogurt",
        consumed: 159,
        burned: 6.0,
        suggest: 4.0,
      },
      {
        date: "Frozen Yogurt",
        consumed: 159,
        burned: 6.0,
        bmi: 24,
        suggest: 4.0,
      },
    ],
  }),
  // methods:{
  //   // created() {
  //   //   axios.get('')
  //   //   .then(resp)=> {
  //   //     console.log(resp)
  //   //   }
  //   // }
  // }
};
</script>

<style>
main {
  background-image: url("https://images.jhtassets.com/38434b12264cf3249b6b7ee58bdc73df5bfdb655/");
  background-size: cover;
}
</style>
