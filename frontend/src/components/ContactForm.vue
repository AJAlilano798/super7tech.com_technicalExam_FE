<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
	>
		<form id="contactForm" @submit.prevent="submitForm">
			<label for="fullname">Full Name:</label>
			<input type="text" id="fullname" v-model="formData.fullname" required>

			<label for="email">Email:</label>
			<input type="email" id="email" v-model="formData.email" required>

			<label for="subject">Subject:</label>
			<input type="text" id="subject" v-model="formData.subject" required>

			<label for="message">Message:</label>
			<textarea id="message" v-model="formData.message" required></textarea>

			<button type="submit">Submit</button>
			<button type="cancel" @click="confirm()">Cancel</button>
		</form>
	</VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import axios from 'axios';


export default {
	data () {
		return {
			formData: {
				fullname: '',
				email: '',
				subject: '',
				message: ''
			},
			submitted: false,
		}
	},
	components: {
		VueFinalModal
	},
	setup(props, { emit }) {
    const confirm = () => {
      emit('confirm');
    };

    return {
      confirm,
    };
  },
	methods: {
    submitForm() {
			axios
			.post(`${import.meta.env.VITE_BASE_URL}/sendMessage`, {data: this.formData})
			.then((response) => {
				console.log(response)
				this.submitted = true;
				this.confirm()
			})
			.catch((error) => {
				console.log(error.toJSON())
				this.submitted = true;
				this.confirm()
			})
    }
  }
}

</script>

<style>
@import '@/styles/contactModal.css';
</style>