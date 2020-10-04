<template>
  <div class="formIndex">

     <div class="container-fluid">

        <main class="container" role="main" >
            <form action="javascript: alert('Denúncia realizada com sucesso!');" class="needs-validation " novalidate method="post">
                <div class="form-row">
 
                    <FormDenuncia />
                    <FormLocalizacao />
                   
                </div>
            </form>

        </main>
    </div>
  </div>  
    
</template>

<script>
import FormDenuncia from './FormDenuncia.vue'
import FormLocalizacao from './FormLocalization.vue'

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {   
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

export default {
    name: 'formIndex',
    components:{
        FormDenuncia,
        FormLocalizacao
    }
}

</script>

<style>
main, form
{
    display: block;
}

main
{
    background-color:whitesmoke;
    box-shadow: inset 0 0 1em rgb(180, 180, 179);
    margin: 4px;
    padding: 2%;
}
footer div
{
    border-bottom-style: solid;
}

ion-icon
{
   font-size: 25px;
   color: whitesmoke;
 
}

#submit
{
    margin: 4px;
}
.col-md-6 , .footer-form
{
    margin: 0 auto;
    height: auto;
    width: 100%;
    text-align: center;
    float: none;
    position: inherit;
 
}

#label-check
{
    margin-left: 1%;
}

</style>