<template>
  <div id="contact">
    <div class="container">
      <div v-for="(contact, i) in contactDetails" :key="i" class="col-4">
        <img :src="contact.img" alt="">
        <span>
          {{ contact.label }}: <a hrefs="#">{{ contact.value }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactDetails: {
      type: Array,
      default: () => {[]},
      required: true
    }
  }
}
</script>