import { createApp } from 'vue';

import router from '@/plugins/router';
import { createVfm } from 'vue-final-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import '@/styles/styles.css';
import 'vue-final-modal/style.css'
import App from '@/App.vue';

const vfm = createVfm()

createApp(App)
.use(VueAxios, axios)
.use(vfm)
.use(router)
.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  }
})
.mount('#app');