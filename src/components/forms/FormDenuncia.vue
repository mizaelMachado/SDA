<template>
    <fieldset  class="container " >
          <legend>Denúncia</legend>
          <div class="col-md-6 mb-3 " >
           <div class="input-group-prepend">
              <div class="form-group col-md-4">  
                    <select class="form-control"  name="Infrator"  >
                        <option selected>escolha...</option>
                        <option value="Infrator">Nome Infrator:</option>
                        <option value="Empresa"> Nome Empresa Infratora:</option>
                    </select> <br>
              </div>
              <input required type="text"  class="form-control" name="nome" placeholder="Nome">
              <div class="invalid-feedback">
                  Por favor, Nome requerido, Ex: Manuel Gonçalves
              </div> 
           </div>
          </div>
          <label>Infração cometida:</label>
          <div class="col-md-6 mb-3">
              <input  class="form-control" required  type="text" name="infracao" 
                  placeholder="Contrabando ou sonegação fiscal"> <br>  
              <div class="invalid-feedback">
                  Por favor, Informe a infração cometida, Ex: uso de laranjas
              </div> 
          </div> 
          
          <label>valor estimado do delito:</label>
          <div class="col-md-6 mb-3">          
              <input class="form-control" type="number" name="valor" 
                          placeholder="500,00"><br>
              <div class="invalid-feedback">
                  Por favor, estime um valor, Ex: 5000
              </div> 
          </div>
          <label>Produto contrabandeado:</label>
          <div class="col-md-6 mb-3">
              <input class="form-control" type="text" name="product"
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
                  cols="50" rows="10"  class="form-control">
              </textarea><br>
              <div class="invalid-feedback">
                  Por favor, necessitamos de uma descrição.
              </div>  
          </div>                
    </fieldset>
</template>

<script>
export default {

}
</script>

<style>

</style>