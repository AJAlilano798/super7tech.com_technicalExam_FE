<template>
	<div id='header'>
		<div class="container">
			<div class="branding">
				<router-link :to="{name: 'homePage'}">
					<img 
						:src="logo"
						alt="Kongsi OLE777 Affiliate Bola"
					/>
				</router-link>
			</div>
			<div class="forms">
				<form action="#">
					<a :href="links.login" class="login-btn">Login</a>
					<a class="register-btn" :href="links.register">Daftar sekarang</a>
				</form>
			</div>
		</div>
	</div>
	<div id="mobile-header">
		<div class="container">
			<div class="mobile-branding">
				<a href="/">
					<img :src="logo" alt="Kongsi OLE777 Affiliate Bola">
				</a>
			</div>
			<div class="mobile-menu">
				<button class="hamburger" @click="dropToggle()" >
					<img src="@/assets/icon-hamburger.svg" id="menu-icon" alt="Menu">
				</button>
			</div>
		</div>
	</div>
	<Navigation />
</template>

<script>
import { RouterLink } from 'vue-router';
import Navigation from './Navigation.vue';

export default {
	props: {
		logo: {
      type: String,
      default: () => {null},
      required: true
    },
		links: {
      type: Object,
      default: () => {{}},
      required: true
    }
	},
	data() {
		return {
			active: false
		}
	},
	components: {
		RouterLink,
		Navigation
	},
	methods: {
		dropToggle() {
			var x = document.getElementById("mobile-dropdown");
			var y = document.getElementById("menu-icon");
			if (this.active) {
				this.active = false;
				x.setAttribute("style", "display: none");
				y.setAttribute("src", "/src/assets/icon-hamburger.svg");
			} else {
				this.active = true;
				x.setAttribute("style", "display: block");
				y.setAttribute("src", "/src/assets/icon-close.svg");
			}
		}
	}
}
</script>