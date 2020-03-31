<template>
  <div class="menu">
    <p class="display-1 text-uppercase text-center mb-5">- Coffee -</p>
    <v-layout row wrap :class="`${$vuetify.breakpoint.mdAndUp ? 'menu-text' : ''}`">
      <v-flex xs6>
        <p class="headline">Espresso</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Single Origin</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Americano</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Latte</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$4</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Cappuccino</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Cortado</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Batch</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$2/$3/$3.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Hand Pour</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">MKT</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Iced</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Cold Brew</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$4</p>
      </v-flex>
    </v-layout>
    <p class="display-1 text-uppercase text-center mb-5">- Tea -</p>
    <v-layout row wrap :class="`${$vuetify.breakpoint.mdAndUp ? 'menu-text' : ''}`">
      <v-flex xs6>
        <p class="headline">Black</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$2.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Green</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3.5</p>
      </v-flex>
      <v-flex xs6>
        <p class="headline">Herbal</p>
      </v-flex>
      <v-flex xs6 class="d-flex justify-end">
        <p class="headline">$3</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.menu {
  background-image: url('../assets/photos/Ecology_Airstream_Interior.jpg');
  background-position: center;
  background-size: 1500px 2000px;
  height: 2000px;
  color: white;
  padding: 80px;
}
.menu-text {
  margin: auto;
  width: 50%;
}
</style>