<template>
  <v-layout row class="red-section">
    <v-flex xs12 md6>
      <v-img
        :src="require('../assets/photos/Ecology_Airstream_Coffee.jpg')"
        width="480px"
        height="320px"
        :class="`${$vuetify.breakpoint.smAndDown ? 'mb-5' : 'mb-1'}`"
      />
    </v-flex>
    <v-flex xs12 md6>
      <div class="white--text text-center">
        <h3 class="display-3">Try Ecology</h3>
        <p class="mt-4 headline">We consider ourselves stewards of the integrity of the coffee we serve. We strive to highlight the quality of the coffee handed down to us by our roasting partner<br><span class="passenger">Passenger Coffee</span> and their producing partners.</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.red-section {
  padding: 80px;
}
.passenger {
  border-bottom: 2px solid #ffffff;
}
</style>