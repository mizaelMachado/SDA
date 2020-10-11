<template>
  
    <fieldset  class="container" >
            <legend>Localização</legend>
            <label for="">CEP:</label>
            <div class="col-md-6 mb-3">
                <input class="form-control" required  type="text" name="zipcode" v-model="zipcode" 
                placeholder="Fortaleza"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha o CEP.
                </div>
            </div>
            <label for="">Cidade:</label>
            <div class="col-md-6 mb-3">
                <input class="form-control" required  type="text" name="city" v-model="city" 
                placeholder="Fortaleza"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha uma cidade
                </div>
            </div>
            <label for="">Estado:</label>
            <div class="col-md-6 mb-3">        
                <input  class="form-control" required  type="text" name="state" v-model="state" 
                placeholder="Ceará"> <br>
                <div class="invalid-feedback">
                    Por favor, necessitamos do estado.
                </div>
            </div>
            <label for="">Bairro:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="neighborhood" v-model="neighborhood" 
                placeholder="Ceará"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha um bairro.
                </div>
            </div>
            <label for="">Rua:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="street" v-model="street" 
                placeholder="Landri Sales"> <br>
                <div class="invalid-feedback">
                    Por favor, informe a rua.
                </div>
            </div>
            <label for="">Numero:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="number" name="number" v-model="number" 
                placeholder="102"> <br>
                <div class="invalid-feedback">
                    Por favor, caso não tenha, digite 0
                </div>
            </div>
            <label for="">Referência:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="reference" v-model="reference" 
                placeholder="Prox. ao hospital"> <br>
                <div class="invalid-feedback">
                    Por favor, o ponto referência é necessário.
                </div>
            </div>
            <label for="">latitude:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="lt" v-model="lt" 
                placeholder="54656"> <br>
            </div>
            <label for="">longitude:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="lg" v-model="lg" 
                placeholder="-56446"> <br>
            </div>
            <div class="col-md-6 mb-3">
               <Map />    
            </div> 
            <div class="footer-form">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck" id="label-check">
                    Concordo com termos e condições
                    </label>
                    <div class="invalid-feedback">
                    Você precisa aceitar os termos.
                    </div>
                </div> <br>
               
            </div>
             <div class="footer-form ">
                       <router-link to="/login">
                        <input id="submit" type="submit" value="Denunciar" class="btn btn-primary">
                       </router-link> 
                        <input type="reset" class="btn btn-primary" value="Apagar">
            </div>
    </fieldset>
    
</template>

<script>

import Map from '../outhers/Map.vue'
export default {
    name: 'FormLocalization',
    components:{
        Map,
    },
    data() {
       return {
         zipcode: '',
         city: '',
         state:'',
         neighborhood:'',
         street:'',
         reference:'',
         number:'',
         lt: '',
         lg: '',
         localization: {},
         baseURI: "http://localhost:5000/SDABackend/api/location/",
      };
    },
    methods:{
        postLocalization: function() {
                 window.addEventListener('load', function() {
                 var forms = document.getElementsByClassName('needs-validation');
                 var persistence = Array.prototype.filter.call(forms, function(form) {
                 form.addEventListener('submit', function(event) {   
                        this.axios
                        .post(this.baseURI, {
                            zipcode: this.zipcode,
                            city: this.city,
                            state:this.state,
                            neighborhood: this.neighborhood,
                            street: this.street,
                            number: this.number,
                            reference: this.reference,
                            lt: this.myCoordenates.lat,
                            lg: this.myCoordenates.lng,
                    })
                    .then((result) => {
                    console.log(result);
                    this.complaint = result.data;
                    }); 
        }, false);
      });
    }, false);
        }
    },
}

</script>

<style>
input
{
    margin: 4px;
}
</style>