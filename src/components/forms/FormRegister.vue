<template>
    <main>
        <form action="" class="needs-validation " name ="form" novalidate method="post">
            <div class="form-row">
                <fieldset  class="container " >
                    <legend>Cadastro</legend>
                    <label>Nome:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" name="name" placeholder="João Gonçalves de Oliveiras"> <br>
                        <div class="invalid-feedback">
                            Por favor, informe seu nome.
                        </div> 
                    </div>
                    <label>E-mail:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="email"  class="form-control" name="email" placeholder="joao@gmail.com"><br>
                        <div class="invalid-feedback">
                            Por favor, informe um email válido, Ex: antonio@hotmail.com
                        </div> 
                    </div>
                    <label>CPF:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="number"  class="form-control" name="cpf" placeholder="11133344477"><br>
                        <span>sem pontuação.</span>
                        <div class="invalid-feedback">
                            Por favor, informe um CPF válido, Ex: 11122233344
                        </div> 
                    </div>
                    <label>Estado:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" name="state" placeholder="CE"><br>
                        <div class="invalid-feedback">
                            Por favor, informe seu estado, Ex: CE
                        </div> 
                    </div>
                    <label>Cidade:</label>
                    <div class="col-md-6 mb-3 " >
                        <input required type="text"  class="form-control" name="city" placeholder="Fortaleza"><br>
                        <div class="invalid-feedback">
                            Por favor, informe sua cidade.
                        </div> 
                    </div>
                    <label>Senha:</label>
                    <div class="col-md-6 mb-3">
                        <input  class="form-control" required  type="password" name="password1" id="password1"><br>  
                        <div class="invalid-feedback">
                            Por favor, Informe sua senha.
                        </div> 
                    </div> 
                    <label>Confirme sua senha:</label>
                    <div class="col-md-6 mb-3">
                        <input  class="form-control" required  type="password" name="password2" id="password2"><br>  
                        <div class="invalid-feedback">
                            Por favor, Insira a confirmação da senha.
                        </div> 
                    </div> 

                    <div class="footer-form">
                        <div class="form-check">
                            <a href="policeRegister.html">Sou policial</a><br>
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label" for="invalidCheck" id="label-check">
                             Não sou um robô.
                            </label>
                            <div class="invalid-feedback">
                             Por favor, prove que é humano.
                            </div>
                        </div> <br>
                    
                            <input type="submit" class="btn btn-primary btn-custom" value="Cadastrar">
                            <ion-icon name="person-add-outline"></ion-icon>
                     
                        
                    </div>
                </fieldset> 
            </div>
        </form>
    </main>
</template>

<script>
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var inputs = document.getElementsByClassName('form-control');
    var myStorage = window.localStorage;
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if(inputs['password1'].value ==  inputs['password2'].value){
          var data ={
              'cpf': inputs['cpf'].value,
              'name': inputs['name'].value,
              'email' : inputs['email'].value,
              'state': inputs['state'].value,
              'city': inputs['city'].value,
              'password': inputs['password1'].value 
            }
          myStorage.setItem( inputs['email'].value, JSON.stringify(data));
        }else{
          alert("as senhas não correspondem");
        }
           
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

</script>

<style>
main
{
    display: block;
    background-color:whitesmoke;
    box-shadow: inset 0 0 1em rgb(180, 180, 179);
    padding: 2%;
    
}



</style>