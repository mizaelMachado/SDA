<template>
      <div class="nav-bar static-top">
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                   <a class="navbar-brand" href="#" id="text-logo">
                       <img src="../../assets/logo.png" alt="logo" id="logo_principal" >
                       SDA
                   </a>
                   <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                                <a class="nav-link" href="login.html">
                                    Login
                                    <font-awesome-icon icon="arrow-alt-from-left" />
                                </a>
                            </li>
                        </ul>
                    </div>
             </nav>
      </div>
</template>

<script>
export default {
 name:'NavBar'
}
</script>

<style>
.navbar-nav
{
    margin-left: 90%;
}
.nav-link
{
    font-size: 20px;
}
#logo_principal
{
    width: 60px;
    height: 60px;
    padding: 2%;
    margin: -18px;
    position: relative;
}
#text-logo
{
    font-family: 'Jockey One', sans-serif;
    font-size: 30px;
    display: block;
    margin-left: 10px;
    position: relative;
}

</style>