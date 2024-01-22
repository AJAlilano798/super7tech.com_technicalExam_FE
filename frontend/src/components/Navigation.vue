<template>
	<div id="navigation">
    <div class="container">
      <ul>
        <li><router-link :to="{name: 'homePage'}">Tentang OLE777</router-link></li>
        <li><router-link :to="{name: 'komisi'}">Komisi</router-link></li>
        <li><router-link :to="{name: 'peraturan'}">Peraturan</router-link></li>
        <li><router-link :to="{name: 'pertanyaanAndJawaban'}">Pertanyaan &amp; Jawaban</router-link></li>
        <li><a class="main-label" href="#" @click="open">OLE777 Official</a></li>
      </ul>
    </div>
	</div>
  <div id="mobile-dropdown">
    <div class="container">
      <ul>
        <li><router-link :to="{name: 'homePage'}">Tentang OLE777</router-link></li>
        <li><router-link :to="{name: 'komisi'}">Komisi</router-link></li>
        <li><router-link :to="{name: 'peraturan'}">Peraturan</router-link></li>
        <li><router-link :to="{name: 'pertanyaanAndJawaban'}">Pertanyaan &amp; Jawaban</router-link></li>
        <li><router-link :to="{name: 'contact'}">Kontak</router-link></li>
        <li><a class="main-label" href="#" @click="open">OLE777 Official</a></li>
        <li><a href="https://bit.ly/48h8QA5" class="login-btn" target="_blank">Login</a></li>
        <li><a class="register-btn" href="https://aff.oleafiliasi.com/affiliate/register/92337024" target="_blank">Daftar sekarang</a></li>
      </ul>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ContactForm from './ContactForm.vue';
import { useModal } from 'vue-final-modal'

const { open, close } = useModal({
  component: ContactForm,
  attrs: {
    onConfirm() {
      close()
    },
  }
})
</script>
