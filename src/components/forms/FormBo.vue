<template>
    <div class="bo">
            <form action="javascript: alert('Denúncia realizada com sucesso!');" class="needs-validation " novalidate method="post">
                <div class="form-row">
                    <fieldset  class="container " >
                        <img src="../../assets/logo.png" alt="logo" ><br>
                        <label id="name1">Policia Federal</label><br>
                        <span id="name2">Ministério da Justiça e Segurança Pública</span><br>
                        <legend>Boletim de Ocorrência</legend>

                        <label>Nome Empresa Infratora:</label><br>
                        <span>Goreth bolsas e acessórios .LTDA</span><br>
                        <label>Infração cometida:</label><br>
                        <span>Contrabando de produtos</span><br>
                        <label>valor estimado do delito:</label><br>
                        <span>100.000 reais</span><br>
                        <label>Produto contrabandeado:</label><br>
                        <span>Cigarros</span><br>
                        <label for="image">Imagem:</label><br>
                        <img src="../../assets/cigarros.jpeg" alt="imagem" sizes="40"><br>
                        <label>Documentos:</label><br>
                        <span>https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floquenoseencuentraengoogle.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fimg11.jpg&f=1&nofb=1</span><br>
                        <label>Descrição do delito:</label><br>
                        <span>Os carregamentos de Cigarros vem da Bolivia, 
                            chega na cidade todas as quartas pela rota 404 as 3 horas da madrugada.
                        </span><br>

                        <label>CEP:</label><br>
                        <span>63700000</span><br>
                        <label>Cidade:</label><br>
                        <span>Crateús</span><br>
                        <label>Estado:</label><br>
                        <span> Ceará</span><br>
                        <label>Bairro:</label><br>
                        <span>Venâncios</span><br>
                        <label>Rua:</label><br>
                        <span>Cap. Castro </span><br>
                        <label>Numero:</label><br>
                        <span>1002</span><br>
                        <label >Referência:</label><br>
                        <span>Prox. Universidade Federal</span><br>
                        <label >latitude:</label><br>
                        <span> 76387</span><br>
                        <label>longitude:</label><br>
                        <span>-874643</span> <br>                   
                        <input type="submit" class="btn btn-primary" value="Imprimir">
            

                    </fieldset>
                    
                </div>
            </form>
    </div>
</template>

<script>
export default {
    name: 'FormBo'
}
</script>

<style>

</style>