<template>
  <Contacts :contactDetails="contactDetails"/>
  <div id="footer">
    <div class="container">
      <div class="col-4 logo-mobile">
        <a href="https://bit.ly/3GAX5bU" target="_blank">
          <img width="auto" src="@/assets/ole777-white2.png" alt="OLE 777">'
        </a>
      </div>
      <div v-for="(sponsor, i) in sponsors" :key="i" class="col-4" :class="`${sponsor.name.includes('Ole') ? 'ole-logo' : ''}`">
        <a v-if="sponsor.link" :href="sponsor.link" target="_blank">
          <img width="auto" :src="sponsor.img" :alt="sponsor.name">
        </a>
        <img v-else :src="sponsor.img" :alt="sponsor.name">
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "./Contacts.vue";

export default {
  props: {
    contactDetails: {
      type: Array,
      default: () => {[]},
      required: true
    },
    sponsors: {
      type: Array,
      default: () => {[]},
      required: true
    }
  },
  components: {
    Contacts
  }
}
</script>