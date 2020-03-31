<template>
  <div class="calendar">
    <p class="display-2 text-uppercase cal-title">Pop-Up Calendar</p>
    <v-layout row>
      <v-flex class="text-center mb-5">
        <iframe src="https://snazzymaps.com/embed/208321" width="750px" height="400px" style="border:none;"></iframe>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md12 class="d-flex justify-center">
        <v-sheet
          color="grey lighten-4 mb-2 py-2"
          height="50px"
          width="750px"
          tile
        >
          <v-layout row justify-space-around>
            <v-flex md1 class="ml-2">
              <v-img
                :src="require('../assets/logos/_place_marker_red.png')"
                height="30px"
                width="50px"
                contain
              />
            </v-flex>
            <v-flex md2>
              <span class="text-uppercase title font-weight-regular">Saturdays</span>
            </v-flex>
            <v-flex md2>
              <span class="title font-weight-regular">9am - 1pm</span>
            </v-flex>
            <v-flex md6>
              <span class="title font-weight-regular">Durham Farmers Market</span>
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.cal-title {
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;
}
.calendar {
  padding-bottom: 60px;
}
</style>