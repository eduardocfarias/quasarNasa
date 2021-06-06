<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar NASA"
      src="~assets/nasa-logo.svg"
      width="300px"
    >
  </q-page>
</template>
<script async custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
</script>
<script>
import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-0992990217144059' })
export default {
  name: 'PageIndex'
}
</script>
