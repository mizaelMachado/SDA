<template>
  <main>
        <form action="/login" class="needs-validation " novalidate >
            <div class="form-row">
                <fieldset  class="container " >
                    <legend>Cadastro Policial</legend>
                    <label>Identificador:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" v-model="id" placeholder="874638273682"><br>
                        <div class="invalid-feedback">
                            Por favor, informe seu identificador.
                        </div> 
                    </div>
                    <select v-model="jobposition" id= "cargos"  >
                        <option value="Delegado">Delegado</option>
                        <option value="Perito"> Perito Criminal</option>
                        <option value="Escrivao"> Escrivão</option>
                        <option value="Agente"> Agente de Policia Federal</option>
                    </select> <br>
                    <label>Departamento (DPF):</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" v-model="departament" placeholder="Fortaleza - CE"><br>
                    
                        <div class="invalid-feedback">
                            Por favor, informe seu departamento
                        </div> 
                        
                            <input class="btn btn-primary btn-custom" type="submit" to="Login" value="Cadastrar">
                            <ion-icon name="person-add-outline"></ion-icon>
                        
                    </div>
                </fieldset> 
            </div>
        </form>
    </main>
</template>

<script>
export default {
    name: 'FormRegisterPolice',
     data() {
       return {
         id: 0,
         jobposition: '',
         departament: '',
         policeman: {},
         baseURI: "https://jsonplaceholder.typicode.com/users",
      };
    },
    methods : {
        postPoliceMan: function() {
            this.axios
                .post(this.baseURI, {
                       id: this.id,
                       jobposition: this.jobposition,
                       departament: this.departament,
                })
                .then((result) => {
                console.log(result);
                this.complaint = result.data;
                });
                     
        },    },
}
</script>

