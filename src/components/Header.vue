<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md2>
        <v-img
          class="ml"
          height="76px"
          width="310px"
          :src="require('../assets/logos/ecology_header.png')"
          contain
        />
      </v-flex>
      <v-flex v-if="$vuetify.breakpoint.mdAndUp" md8 class="menu font-weight-light">
        <span
          class="custom-red-btn"
          @click="$vuetify.goTo('#coffee', {duration: 900, offset: 0, easing: 'easeInQuart'})"
        >
          Our Coffee
        </span>
        <span class="margin-nav">|</span>
        <span
          class="custom-green-btn"
          @click="$vuetify.goTo('#pop-up', {duration: 900, offset: 0, easing: 'easeInQuart'})"
        >
          Times & Locations
        </span>
        <span class="margin-nav">|</span>
        <span
          class="custom-yellow-btn"
          @click="$vuetify.goTo('#contact', {duration: 900, offset: 0, easing: 'easeInQuart'})"
        >
          Connect
        </span>
      </v-flex>
      <v-flex v-if="$vuetify.breakpoint.mdAndUp" md2>
        <v-btn
          class="custom-btn white--text font-weight-light"
          color="#40614F"
          large
          tile
          width="200px"
          @click="$vuetify.goTo('#contact', {duration: 900, offset: 0, easing: 'easeInQuart'})"
        >Contact
        </v-btn>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap ma-5 pa-5>
        <v-flex xs12 md6>
          <div class="text-div ml">
            <h3 class="display-2 mb-3">Flavorful<br>Stimulating<br>Consciously<br>Sourced <span class="coffee-underline">Coffee</span></h3>
            <h4 class="title font-weight-light">We serve dynamic specialty coffee from various countries of origin.</h4>
          </div>
          <v-btn
            class="custom-btn font-weight-light ml"
            color="#F4B646"
            large
            tile
            width="280px"
            @click="$vuetify.goTo('#pop-up', {duration: 900, offset: 0, easing: 'easeInQuart'})"
          >Find Us</v-btn>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex v-if="$vuetify.breakpoint.mdAndUp" md4>
          <v-img
            :src="require('../assets/photos/Ecology_Mike.jpg')"
            width="420px"
            height="480px"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu {
  text-align: center;
  padding-top: 28px;
}
.custom-btn {
  font-family:"titling-gothic-fb";
  margin-top: 18px;
}
.margin-nav {
  margin-right: 20px;
  margin-left: 20px;
}
.ml {
  margin-left: 35px;
}
.text-div {
  margin-bottom: 100px;
  line-height: 200%;
}
.custom-red-btn {
  font-family:"titling-gothic-fb";
  text-transform: uppercase;
  border-bottom: 2px solid #EE4139;
  margin-right: 15px;
}
.custom-red-btn:hover {
  cursor: pointer;
}
.custom-green-btn {
  font-family:"titling-gothic-fb";
  text-transform: uppercase;
  border-bottom: 2px solid #40614F;
  margin-right: 15px;
}
.coffee-underline {
  border-bottom: 2px solid #F4B646;
}
.custom-green-btn:hover {
  cursor: pointer;
}
.custom-yellow-btn {
  font-family:"titling-gothic-fb";
  text-transform: uppercase;
  border-bottom: 2px solid #F4B646;
}
.custom-yellow-btn:hover {
  cursor: pointer;
}
</style>