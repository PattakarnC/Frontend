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
            <v-btn to ="/">
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
                        <h1 class="text-center display-1 my-7">CHOOSE DATE</h1>
                        <template>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                lg="20"
                              >
                                <v-menu
                                  ref="menu1"
                                  v-model="menu1"
                                  :close-on-content-click="false"
                                  transition="scale-transition"
                                  offset-y
                                  max-width="290px"
                                  min-width="auto"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                      v-model="dateFormatted"
                                      label="Date"
                                      hint="MM/DD/YYYY"
                                      persistent-hint
                                      prepend-icon="mdi-calendar"
                                      v-bind="attrs"
                                      @blur="date = parseDate(dateFormatted)"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker
                                    v-model="date"
                                    no-title
                                    @input="menu1 = false"
                                  ></v-date-picker>
                                </v-menu>
                              </v-col>
                            </v-row>
                          </v-container>
                        </template>
                      </v-card-text>

                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3 mb-10">Create New Activity</h1>
                        <v-form class="my-10">
                          <v-text-field
                            id="Food"
                            label="Food"
                            name="food"
                            prepend-icon="fas fa-hamburger"
                            type="text"
                            color="teal accent-3"
                            v-model="food"
                          />
                          <v-text-field
                            id="CaloriesConsume"
                            label="Calories Consume"
                            name="calories consume"
                            prepend-icon="fas fa-fire-alt"
                            type="text"
                            color="teal accent-3"
                            v-model="consumedCal"

                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10 ">
                        <v-btn @click="Create" rounded color="teal accent-3" dark to="/exercise">NEXT</v-btn>
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

<style scoped>

</style>
<script>
import UserService from '../services/user.service'

// import axios from "axios";

export default {
  name: "Create",

  data: vm => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,

    food: "",
    consumedCal: 0,
    // dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
  }),

// (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
//   computed: {
//     computedDateFormatted () {
//       return this.formatDate(this.date)
//     },
//   },
  watch: {
    date() {
      this.date = this.formatDate(this.date);
    }
  },

  methods: {

    create() {
      UserService.postCreate(this.$store.state.auth.user, this.date, this.consumedCal)
    // postConsumedCal() {
    //   return axios.post('http://localhost:8080/api/auth/'+ 'create/' + this.u)
    //   // async foo() {
    //   //   let food = {
    //   //     foodBack: this.food,
    //   //     cal: this.cal
    //   //   }
    //   //
    //   // let response = await Vue.axios.post("url", food);
    //   //
    //   // },
    //
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    handleLogout() {
      this.$store.dispatch('auth/logout', this.user).then(
        () => {
          this.$router.push('/');
        }
      );
    }
  }
};
</script>