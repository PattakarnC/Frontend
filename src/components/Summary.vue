<template xmlns:color="http://www.w3.org/1999/xhtml">
  <div class="grids">
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
    <div class="card-one">
      <div class="card">
        <div class="card__side card__side--front" id="front-1">
          <div class="text-box">
            <h3 class="text-box-top"></h3>
            <h1 class="text-box-middle">Summary</h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="card-two">
      <div class="card">
        <div class="card__side card__side--front" id="front-2">
          <div class="text-box">
            <h3 class="text-box-top">Date</h3>
            <h1 class="text-box-middle">24/07/2021</h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="card-three">
      <div class="card">
        <div class="card__side card__side--front" id="front-3">
          <div class="text-box">
            <h3 class="text-box-top">Calorie Intake</h3>
            <h1 class="text-box-middle">2800</h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="card-four">
      <div class="card">
        <div class="card__side card__side--front" id="front-4">
          <div class="text-box">
            <h3 class="text-box-top">Calorie Burned</h3>
            <h1 class="text-box-middle">100</h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="card-five">
      <div class="card">
        <div class="card__side card__side--front" id="front-5">
          <div class="text-box">
            <h3 class="text-box-top">Suggestion</h3>
            <h1 class="text-box-middle">Eat 200 kcal less</h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
        <div class="card__side card__side--back" id="back-5">
          <div class="text-box">
            <h3 class="text-box-top"></h3>
            <h1 class="text-box-middle"></h1>
            <h3 class="text-box-lower"></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  date() {
    return {
      date:"",
      consumedCal:"",
      burnedCal:"",
      suggestedCal:"",
    }
  },
  // mounted() {
  //   axios.get("url")
  // },
  methods: {
    getCals() {
      UserService.getSuggestedCal(this.$store.state.auth.user).then(
        response =>{
          console.log(response.data);
          this.refreshCalendar();
        },
        error => {
          console.log(error);
        }
      );

    },

    handleLogout() {
      this.$store.dispatch('auth/logout', this.user).then(
        () => {
          this.$router.push('/');
        }
      );
    },
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 48.5%;
}
body {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  padding: 3rem;
  box-sizing: border-box;
}
.grids {
  max-width: 136rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
}
.card-one {
  grid-column: 1/4;
}
.card-two {
  grid-column: 1/4;
}
.card-three {
  grid-column: 1/4;
}
.card-four {
  grid-column: 1/4;
}
.card-five {
  grid-column: 1/4;
}
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 25rem;
  width: 100%;
  transition: all ease-in-out 400ms;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

.card:active {
  transform: translateY(-1px);
}

.card__side {
  transition: all 0.8s ease;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 25rem;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
}
.card__side--front {
  background-color: #2196f3;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card__side--back {
  background-color: #303f9f;
  transform: rotateY(180deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
.text-box-top {
  font-size: 2.2rem;
  text-shadow: 2px 2px 10px #0000006c;
  font-weight: 400;
}
.text-box-middle {
  font-size: 5.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 10px #0000006c;
}
.text-box-lower {
  font-size: 2rem;
  text-shadow: 2px 2px 10px #0000006c;
  font-weight: 400;
}
.heading {
  transition: all 0.6s linear;
}
.hide {
  visibility: hidden;
  opacity: 0;
}
.show {
  visibility: visible;
  opacity: 1;
}
#front-1 {
  background-image: linear-gradient(
    rgba(204, 30, 88, 0.6),
    rgba(20, 20, 20, 0.6)
  ),
  url("https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/125272223_10223878091438644_4129853816922752161_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=H87ViLmrxekAX-6eMPt&_nc_ht=scontent.fphs4-1.fna&oh=ae3eed4a94e3e0ce4065d74230d8c72e&oe=611DB1FF");
}
#front-2 {
  background-image: linear-gradient(
    rgba(31, 136, 168, 0.767),
    rgba(14, 46, 65, 0.9)
  ),
  url("https://cdn.discordapp.com/attachments/795822152850735104/867998883123429406/ktangwon.jpeg");
}
#front-3 {
  background-image: linear-gradient(
    rgba(84, 86, 175, 0.9),
    rgba(27, 27, 85, 0.9)
  ),
  url("https://cdn.discordapp.com/attachments/795822152850735104/868000123215548446/Screen_Shot_2564-07-23_at_12.20.51.png");
}
#front-4 {
  background-image: linear-gradient(
    rgba(74, 190, 122, 0.767),
    rgba(6, 66, 48, 0.9)
  ),
  url("https://cdn.discordapp.com/attachments/795822152850735104/868001116841971762/JB.jpeg");
}
#front-5 {
  background-image: linear-gradient(
    rgba(128, 74, 190, 0.767),
    rgba(42, 6, 66, 0.9)
  ),
  url("https://scontent.fphs4-1.fna.fbcdn.net/v/t1.18169-9/31805_392816929468_6841856_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=1i9RT7MwhSoAX9NsR3f&_nc_ht=scontent.fphs4-1.fna&oh=9f63b17ade08576dda84c69fe3465edc&oe=611F794D");
}
#front-6 {
  background-image: linear-gradient(
    rgba(214, 21, 86, 0.801),
    rgba(20, 20, 20, 0.6)
  ),
  url("https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
}

@media screen and (min-width: 1024px) {
  html {
    font-size: 62.5%;
  }

  .grids {
    max-width: 136rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
  }

  .card-one {
    grid-column: 1/3;
  }

  .card-two {
    grid-column: 3/4;
  }

  .card-three {
    grid-column: 1/2;
  }

  .card-four {
    grid-column: 2/2;
  }

  .card-five {
    grid-column: 3/4;
  }
}
</style>

