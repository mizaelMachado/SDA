<template>
  <div class="login">
      <FormLogin />
  </div>
</template>

<script>
import FormLogin from '@/components/forms/FormLogin.vue'

export default {
 name: 'Login',
  components: {
    FormLogin
  }
}
</script>

<style>
p
{
    color:rgb(95, 2, 2);
    
}
p ion-icon
{
    font-size: 25px;
}
h3
{
    padding-top: 0px;
}
.left
{
    float: left;
    border-width:2px;
    width: 40%;
    background-color: rgb(29, 117, 146);
    color:white;
    box-shadow: inset 0 0 1em rgb(121, 121, 120);


}
.right, .col-md-6 
{
    margin: 0 auto ;
    height: auto;
    width: 100%;
    text-align: center;
    float: none;
    justify-content: flex-start;
   
}

#logo
{
    float: center;
    width: 90%;
    height: 90%;
    padding: 2%;
    padding-top: 20px;
}
</style>