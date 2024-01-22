<template>
  <div id="sticker-app">
    <div class="container hidden-m">
      <div class="col-12">
        <a :href="appDetails.link" target="_blank">
          <img :src="appDetails.img" alt="Sticker WhatsApp Gratis - Kongsi OLE777">
        </a>
      </div>
    </div>

    <div class="visible-m">
      <div class="col-12">
        <a :href="appDetails.link" target="_blank">
          <img src="@/assets/Sticker WhatsApp Gratis - Kongsi OLE777(600x100).gif" alt="Sticker WhatsApp Gratis - Kongsi OLE777">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appDetails: {
      type: Object,
      default: () => {{}},
      required: true
    }
  }
}
</script>