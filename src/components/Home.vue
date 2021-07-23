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
                    <v-col cols="10" md="8">
                      <v-card-text class="mt-5">
                        <h1
                          class="
                            text-center
                            display-2
                            teal--text
                            text--accent-3
                            mb-5
                          "
                        >
                          Welcome {{username}}
                        </h1>
                        <v-data-table
                          :headers="headers"
                          :items="rows"
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
                      <div class="text-center" >
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

import UserService from '../services/user.service'
// import home from '../models/home';


export default {

  name: "Home",

  data: () => ({
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
    dataList: [],
    rows: [
      {
        date: "20/07/2021",
        consumed: "2000",
        burned: "100",
        suggest: "Eat 100 kcal more",
      },
      {
        date: "21/07/2021",
        consumed: "1900",
        burned: "200",
        suggest: "Eat 300 kcal more",
      },
      {
        date: "22/07/2021",
        consumed: "2500",
        burned: "100",
        suggest: "Eat 400 kcal less",
      },
      {
        date: "23/07/2021",
        consumed: "2000",
        burned: "100",
        suggest: "Eat 100 kcal more",
      },
      {
        date: "24/07/2021",
        consumed: "2050",
        burned: "100",
        suggest: "Eat 50 kcal more",
      },
    ],
  }),

  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout', this.user).then(
        () => {
          this.$router.push('/');
        }
      );
    },

    getData() {
      const data = [];
      UserService.getData(this.$store.state.auth.user).then(

        taskList => {
          const taskData = taskList.data;
          taskData.forEach(
            home => {
              data.push({
                date: home.date,
                consumed: home.consumedCal,
                burned: home.burnedCal,
                suggested: home.suggestedCal,
              });
            }
          )

        },error => {

          console.log(error);
        }
      )
      this.data = data;
    },
  }

};
</script>

<style>
main {
  background-image: url("https://images.jhtassets.com/38434b12264cf3249b6b7ee58bdc73df5bfdb655/");
  background-size: cover;
}
</style>
