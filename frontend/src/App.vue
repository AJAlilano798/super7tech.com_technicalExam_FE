<template>
  <Particles />
  <Header 
    :logo="logo" 
    :links="link" 
  />
  <ModalsContainer />
  <router-view />
  <sticker-app 
    :appDetails="appDetails"
  />
  <Footer 
    :sponsors="sponsors"
    :contactDetails="contactDetails"
  />
  <FloatingWhatsApp />
</template>

<script>
import { RouterView } from 'vue-router';
import { ModalsContainer } from 'vue-final-modal'
import axios from 'axios';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import StickerApp from '@/components/StickerApp.vue';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.vue';
import Particles from './components/Particles.vue';

export default {
  components: {
    RouterView,
    ModalsContainer,
    Header,
    Footer,
    StickerApp,
    FloatingWhatsApp,
    Particles
  },
  data () {
    return {
      contactDetails: [],
      appDetails: {},
      sponsors: [],
      link: {},
      logo: null
    };
  },
  mounted () {
    document.body.classList.add('mobile-footer-retained')
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/global`)
      .then(response => {
        this.contactDetails = response.data.contact;
        this.appDetails = response.data.download_app;
        this.sponsors = response.data.footer;
        this.link = response.data.link;
        this.logo = response.data.logo;
      })
  },
}
</script>