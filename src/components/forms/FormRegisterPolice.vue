<template>
  <main>
        <form action="home.html" class="needs-validation " novalidate method="post">
            <div class="form-row">
                <fieldset  class="container " >
                    <legend>Cadastro Policial</legend>
                    <label>Identificador:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" name="id" placeholder="874638273682"><br>
                        <div class="invalid-feedback">
                            Por favor, informe seu identificador.
                        </div> 
                    </div>
                    <select name="cargos" id= "cargos"  >
                        <option value="Delegado">Delegado</option>
                        <option value="Perito"> Perito Criminal</option>
                        <option value="Escrivao"> Escrivão</option>
                        <option value="Agente"> Agente de Policia Federal</option>
                    </select> <br>
                    <label>Departamento (DPF):</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" name="department" placeholder="Fortaleza - CE"><br>
                    
                        <div class="invalid-feedback">
                            Por favor, informe seu departmento
                        </div> 
                        
                            <input class="btn btn-primary btn-custom" type="submit" value="Cadastrar">
                            <ion-icon name="person-add-outline"></ion-icon>
                        
                    </div>
                </fieldset> 
            </div>
        </form>
    </main>
</template>

<script>
export default {
    name: 'FormRegisterPolice'
}
</script>

<style>

</style>