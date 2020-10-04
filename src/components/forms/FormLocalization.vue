<template>
  
    <fieldset  class="container" >
            <legend>Localização</legend>
            <label for="">CEP:</label>
            <div class="col-md-6 mb-3">
                <input class="form-control" required  type="text" name="cep" 
                placeholder="Fortaleza"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha o CEP.
                </div>
            </div>
            <label for="">Cidade:</label>
            <div class="col-md-6 mb-3">
                <input class="form-control" required  type="text" name="city" 
                placeholder="Fortaleza"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha uma cidade
                </div>
            </div>
            <label for="">Estado:</label>
            <div class="col-md-6 mb-3">        
                <input  class="form-control" required  type="text" name="states" 
                placeholder="Ceará"> <br>
                <div class="invalid-feedback">
                    Por favor, necessitamos do estado.
                </div>
            </div>
            <label for="">Bairro:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="neighborhood" 
                placeholder="Ceará"> <br>
                <div class="invalid-feedback">
                    Por favor, escolha um bairro.
                </div>
            </div>
            <label for="">Rua:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="street" 
                placeholder="Landri Sales"> <br>
                <div class="invalid-feedback">
                    Por favor, informe a rua.
                </div>
            </div>
            <label for="">Numero:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="number" name="number" 
                placeholder="102"> <br>
                <div class="invalid-feedback">
                    Por favor, caso não tenha, digite 0
                </div>
            </div>
            <label for="">Referência:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="reference" 
                placeholder="Prox. ao hospital"> <br>
                <div class="invalid-feedback">
                    Por favor, o ponto referência é necessário.
                </div>
            </div>
            <label for="">latitude:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="city" 
                placeholder="54656"> <br>
            </div>
            <label for="">longitude:</label>
            <div class="col-md-6 mb-3"> 
                <input  class="form-control" required  type="text" name="city" 
                placeholder="-56446"> <br>
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
                        <input id="submit" type="submit" value="Denunciar" class="btn btn-primary">
                        <input type="reset" class="btn btn-primary" value="Apagar">
            </div>
    </fieldset>
    
</template>

<script>
export default {
    name: 'FormLocalization'
}
</script>

<style>
input
{
    margin: 4px;
}
</style>