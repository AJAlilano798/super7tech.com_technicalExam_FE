<template>
  <div id="banner">
    <img src="../assets/banner-new.webp" alt="banner"/>
    <div class="banner-text">
			<div class="container">
        <div>
          <h2 class="banner-header">
            <span class="banner-gradient">50% INSTANT KOMISI AFILIASI</span>
            <span class="banner-white">TAMBAH PENGHASILAN ANDA,</span>
            <span class="banner-white">PASSIVE INCOME MENGGIURKAN!</span>
          </h2>
          <a class="banner-button" href="https://aff.oleafiliasi.com/affiliate/register/92337024">Daftar Sekarang</a>
        </div>
			</div>
    </div>
  </div>
  <div id="cta">
    <div class="container">
      <div v-for="(offer, i) in offers.reverse()" :key="i" class="text-center col-3">
        <img :src="offer.img" class="" alt="Bebas Resiko &amp; Menguntungkan">
      </div>
    </div>
  </div>
  <div id="services">
    <div class="container">
      <div class="col-1" v-html="content">
      </div>
      <div class="col-1">
      </div>
      <div v-for="(service, i) in services" :key="i" class="text-center col-4" :class="{first: i==1}">
        <img :src="service.img" alt="Group Icon">
        <h2 class="alwaysTwoLines"> {{ service.title }}</h2>
        <p>
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
		return {
			content: null,
      offers: [],
      services: [],
      slideshow: []
		}
	},
  mounted () {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/homePage`)
      .then(response => {
        this.content = response.data.content;
        this.offers = response.data.offers;
        this.services = response.data.services;
        this.slideshow = response.data.slideshow;
      })
  },
  methods: {
  }
}
</script>

<style>
@import '@/styles/home.css';

.alwaysTwoLines {
  line-height: 2.5ex;
  height: 7.5ex; /* 2.5ex for each visible line */
  overflow: hidden;
}
</style>