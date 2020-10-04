<template>
  <div class="footer">
      <div class="nav-bar static-bottom">
        <footer class="navbar navbar-dark bg-dark">
           <div class="footer-center-icons  ">

                <a href="http://github.com.br"   target="_blank">
                     <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="http://instagram.com.br" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="http://facebook.com.br" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="http://linkedin.com.br" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://web.whatsapp.com" target="_blank">
                    <ion-icon name="logo-whatsapp"></ion-icon>

                    <!-- usar esses icones-->
                    <font-awesome-icon icon="user-secret" />


                </a><br>

           </div>
        </footer>
    </div >
  </div>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style>
.footer-center-icons, .footer-medium-icons
{
    display: block;
    margin-left: auto;
    margin-right: auto;
    
}
.footer-center-icons
{
    align-self:top;
}
.footer-medium-icons
{
    align-content: unset;
}
</style>