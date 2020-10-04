<template>
      <main>    
        <div class="main">
            <div class="left">
                <img src="../../assets/logo.png" alt="logo" id="logo" width="150px" height="120px">
                <h3>Departamento de investigação</h3><br>
                <p> 
                    <ion-icon name="alert-circle-outline"></ion-icon>
                    Seus dados permanecerão anônimos para qualquer denúncia.
                </p>
            </div>
            <div class="right">
                <form action="index.html" class="needs-validation" novalidate method="post">
                    <div class="form-row">
                        <fieldset  class="container " >
                            <legend>Login</legend>
                            <label>E-mail:</label>
                            <div class="col-md-6 mb-3 " >
                                <input required type="email"  class="form-control" name="email" placeholder="joao@gmail.com"><br>
                                <div class="invalid-feedback">
                                    Por favor, informe um email válido, Ex: antonio@hotmail.com
                                </div> 
                            </div>

                            <label>Senha:</label>
                            <div class="col-md-6 mb-3">
                                <input  class="form-control" required  type="password" name="password"><br>  
                                <div class="invalid-feedback">
                                    Por favor, senha necessária.
                                </div> 
                            </div> 

                            <div class="footer-form">
                                <div class="form-check">
                                    <a href="register.html">Cadastre-se</a><br>
                                    <a href="#">Esqueci minha senha</a><br>
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck" id="label-check">
                                     Não sou um robô.
                                    </label>
                                    <div class="invalid-feedback">
                                     Por favor, prove que é humano.
                                    </div>
                                </div> <br>
                                <input type="submit" class="btn btn-primary" value="Entrar">
                            </div>
                        </fieldset> 
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name:'FormLogin'
}
</script>

<style>
h3
{
    margin-top: 20px;
}
</style>