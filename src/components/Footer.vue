<template>
  <v-layout row class="footer">
    <v-flex xs6>
      <v-layout row :class="`${$vuetify.breakpoint.mdAndUp ? 'justify-start email-left' : 'justify-center email-left'}`">
        <v-flex xs12 mb-5>
          <span class="headline white--text">mike@ecology.coffee</span>
        </v-flex>
        <v-flex xs12>
          <a href="https://www.facebook.com/ecology.coffee/" target="_blank" rel="noopener">
            <v-img
              class="d-inline-flex"
              :src="require('../assets/logos/_icon_facebook.png')"
              height="42px"
              width="42px"
              contain
            />
          </a>
          <a href="https://www.instagram.com/ecology.coffee/" target="_blank" rel="noopener">
            <v-img
              class="d-inline-flex ml-5"
              :src="require('../assets/logos/_icon_instagram.png')"
              height="40px"
              width="40px"
              contain
            />
          </a>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md6>
      <v-layout row :class="`${$vuetify.breakpoint.mdAndUp ? 'justify-end align-center' : 'justify-center'}`">
        <div class="email-right">
          <a href="https://www.passengercoffee.com/" target="_blank" rel="noopener">
            <v-img
              class="d-inline-flex ml-5"
              :src="require('../assets/logos/_icon_passanger_tea.png')"
              height="80px"
              width="80px"
              contain
            />
          </a>
          <v-img
            class="d-inline-flex ml-5"
            :src="require('../assets/logos/ecology_footer.png')"
            height="100"
            width="100"
            contain
          />
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.footer {
  padding-bottom: 40px;
}
.email-left {
  margin-top: 40px;
  margin-left: 40px;
}
.email-right {
  margin-top: 40px;
  margin-right: 80px;
}
</style>