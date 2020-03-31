<template>
  <div fluid class="main">
    <section class="white-background">
      <Header />
    </section>
    <section class="red-background">
      <Mission />
    </section>
    <Menu id="coffee"/>
    <section class="white-background" id="pop-up">
      <PopupCalendar />
    </section>
    <section class="cream-background" id="contact">
      <Contact />
    </section>
    <section class="green-background">
      <Footer />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mission from '@/components/Mission.vue'
import Menu from '@/components/Menu.vue'
import PopupCalendar from '@/components/PopupCalendar.vue'
// import Instagram from '@/components/Instagram.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Mission,
    Menu,
    PopupCalendar,
    // Instagram,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.main {
  font-family:"titling-gothic-fb-narrow";
}
.white-background {
  background-color: #ffffff;
}
.red-background {
  background-color: #EE4139;
}
.cream-background {
  background-color: #F5F2E9;
}
.green-background {
  background-color: #40614F
}
</style>