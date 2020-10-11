<template>
   <div class="tablegroup">
        <table id="tableDate" >
            <thead>
                <tr>
                    <td>Boletins de ocorrência:</td>
                </tr>
                <tr>
                    <td> <router-link to="/bo">Cidade: Crateús,Estado CE,Infração: Contrabando </router-link></td>
                </tr>
                <tr>
                    <td> <a href="#">Cidade: Pedro II,Estado PI,Infração:Sonegação Fiscal</a></td>
                </tr>
            </thead>
        </table> 
    </div>
</template>

<script>
export default {
    name: 'Table'
}
</script>

<style>
table
{
    border: 1px;
    width: 90%;
}
table thead td
{
    margin:20px;
    padding: 20px;
    border: 1px solid black;
}
.tablegroup
{
    margin-top: 50%;
    position: relative;
    
}
.tablegroup
{
    margin-top: 20px;
    font: 15px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>