<template>
  <div class="home">
  
      <NavBar />
      <main class="container" role="main" >
        <Card />
        <Form />
        <Table />
      </main>  
      <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/navs/NavBar.vue'
import Card from '@/components/outhers/Card.vue'
import Table from '@/components/outhers/Table.vue'
import Form from '@/components/forms/FormLocalizationBO.vue'
import Footer from '@/components/navs/Footer.vue'

export default {
    name:'Home',
    components:{
        NavBar,
        Form,
        Card,
        Table,
        Footer
    }
}
</script>

<style>

</style>