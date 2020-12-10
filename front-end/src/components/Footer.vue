<template>
  <div>
    <footer class="footer">
        <div class="fooder-text">Equipe Vai que passa
        </div>
        <div class="fooder-textSub">
            Raiza -- Ikaro -- Matheus
        </div>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'tarefas'
}
</script>

<style scoped>
    .footer{

        background: #00428F;

    }
    .fooder-text{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        padding: 10px;
        padding-top: 40px;
        
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
    }
    .fooder-textSub{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;       
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 50px;
        color: #ffffff;
    }
</style>