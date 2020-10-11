<template>
    <fieldset  class="container " >
          <legend>Denúncia</legend>
          <div class="col-md-6 mb-3 " >
           <div class="input-group-prepend">
              <div class="form-group col-md-4">  
                    <select class="form-control"  name="typeoffender"  v-model="typeoffender" >
                        <option selected>escolha...</option>
                        <option value="Infrator">Nome Infrator:</option>
                        <option value="Empresa"> Nome Empresa Infratora:</option>
                    </select> <br>
              </div>
              <input required type="text"  class="form-control" v-model="name" name="name" placeholder="Nome">
              <div class="invalid-feedback">
                  Por favor, Nome requerido, Ex: Manuel Gonçalves
              </div> 
           </div>
          </div>
          <label>Infração cometida:</label>
          <div class="col-md-6 mb-3">
              <input  class="form-control" required  type="text" name="infringement" v-model="infringement" 
                  placeholder="Contrabando ou sonegação fiscal"> <br>  
              <div class="invalid-feedback">
                  Por favor, Informe a infração cometida, Ex: uso de laranjas
              </div> 
          </div> 
          
          <label>valor estimado do delito:</label>
          <div class="col-md-6 mb-3">          
              <input class="form-control" type="number" name="value" v-model="value" 
                          placeholder="500,00"><br>
              <div class="invalid-feedback">
                  Por favor, estime um valor, Ex: 5000
              </div> 
          </div>
          <label>Produto contrabandeado:</label>
          <div class="col-md-6 mb-3">
              <input class="form-control" type="text" name="product" v-model="product"
                      placeholder="Cigarros/armas/televisores"><br>
          </div>
          <label for="image">Imagem:</label>
          <div class="col-md-6 mb-3">
              <div class="custom-file">
                  <input  class="custom-file-input" type="file" name="image"><br> 
                  <label class="custom-file-label" for="image">Escolher arquivo</label>
              </div>
          </div>
          <label>Documentos:</label>
          <div class="col-md-6 mb-3">
              <div class="custom-file">
                  <input  class="custom-file-input"  type="file" name="document"><br> 
                  <label class="custom-file-label" for="document">Escolher arquivo</label>
              </div>
          </div>
          <label>Descrição do delito:</label>
          <div class="col-md-6 mb-3">
              <textarea 
                  required placeholder="EX.:O contrabando ocorre em um carro sedan vermelho, placa: 6438-FDG, geralmente pela madrugada, com produtos vindos do Paraguai..."
                  cols="50" rows="10"  class="form-control" name="description" v-model="description">
              </textarea><br>
              <div class="invalid-feedback">
                  Por favor, necessitamos de uma descrição.
              </div>  
          </div>                
    </fieldset>
</template>

<script>
export default {
    name : 'Denuncia',
     data() {
       return {
         typeoffender: 0,
         name: '',
         infringement: '',
         value : 0,
         product: '',
         //imagens e documento
         description: '',
         complaint: {},
         baseURI: "http://localhost:5000/SDABackend/api/complaint/",
      };
    },
    postComplaint: function(){
      window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {   
                this.axios 
                .post(this.baseURI, {
                       typeoffender: this.typeoffender,
                       name: this.name,
                       infringement: this.infringement,
                       value : this.value,
                       product: this.product,
                       //imagens e documento
                       description: this.descrition,
                })
                .then((result) => {
                console.log(result);
                this.complaint = result.data;
                });
        }, false);
      });
    }, false);
    }

}


</script>

<style>

</style>