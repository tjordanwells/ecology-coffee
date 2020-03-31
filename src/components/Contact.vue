/* eslint-disable no-console */
<template>
  <div>
    <p class="contact-title display-2">We'll Come To You!</p>
    <p class="headline text-center">Ecology can be at your next business function or private event.</p>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs12 md4>
          <v-text-field
            class="mr-4"
            solo
            flat
            label="Name"
            v-model="name"
          />
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field
            solo
            flat
            label="Email"
            v-model="email"
          />
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12 md10>
          <v-textarea
            solo
            flat
            label="Tell us about your event"
            v-model="message"
          />
        </v-flex>
      </v-layout>
      <div class="text-center">
        <v-btn
          class="custom-btn white--text font-weight-light"
          color="#40614F"
          large
          tile
          width="200px"
          @click="sendEmail"
        >Send
        </v-btn>
      </div>
      <v-img
        class="airstream"
        :src="require('../assets/logos/ecology_airstream.png')"
        height="120px"
        width="240px"
        contain
      />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: ''
  }),
  methods: {
    sendEmail () {
      //clea
    }
  }
}
</script>

<style scoped>
.contact-title {
  padding-top: 40px;
  text-align: center;
}
.custom-btn {
  font-family:"titling-gothic-fb";
  margin-top: 18px;
}
.airstream {
  margin: 40px auto 30px auto;
}
</style>