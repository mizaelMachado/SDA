<template>
  <div class="home">
    <NavBar  />
    <FormIndex />
    <Footer />
  </div>
</template>

<script>

import NavBar from '@/components/navs/NavBar.vue'
import FormIndex from '@/components/forms/FormIndex.vue'
import Footer from '@/components/navs/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    FormIndex,
    Footer
  }
}
</script>
