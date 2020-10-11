<template>
  <div class="form-localization-BO">
    
            <form action="/bo" class="needs-validation " novalidate >
                <div class="form-row">
                    <fieldset  class="container ">
                        <legend>Pesquisar Boletins de ocorrência:</legend><br>
                        <div class="col-md-6 mb-3 " >

                          <label> Localização:</label><br>
                          
                         <div class="input-group-prepend">
                            <div class="form-group col-md-4">
                                <select name="localidade" class="form-control" >
                                    <option value="Infrator">Estado</option>
                                    <option value="Empresa"> Cidade</option>
                                </select> <br>
                            </div>    
                            <input  type="text"  class="form-control" name="localidade" placeholder="Nome"><br>
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

                            <input id="submit" type="submit" class="btn btn-primary" value="Pesquisar">
                            <input type="reset" class="btn btn-primary" value="Apagar">

                    </fieldset>  
                </div>
            </form>    
  </div>
</template>

<script>
export default {
    name: 'FormLocalizationBO'
}
</script>

<style>
#submit
{
    margin: 4px;
}
</style>