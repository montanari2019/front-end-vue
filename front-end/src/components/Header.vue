<template>
  <div>
   <header class="header conteiner_ajuste">
            <div>
                <div class=" header-titulo">Gerenciador de </div>
                <div class=" header-subtitulo">Atividades</div>
            </div>
            
            <nav>
                <router-link to="/tarefas" class = "link-tarefa" >Tarefas</router-link>
                <router-link to="/" class = "link-tarefa" >Equipes</router-link>
            </nav> 
    </header>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'header'
}
</script>

<style scoped>

.conteiner_ajuste{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.header{
    
    background: #00428F;
    margin: -8px;
    margin-top: -16px

}
.header-titulo{
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-variant: small-caps;
    color: #f2f2f2;
    padding: 20px;
    padding-bottom: 5px;
    padding-right: 0%;
    background: #00428F;
    
}
@media(min-width: 650px){
    .header-titulo{
        font-size: 24px;
        padding-left: 50px;
        padding-bottom: 0;
    }
    .flexbox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
   
}
.header-subtitulo{
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #f2f2f2; 
    padding: 20px;
    padding-right: 0%;
    padding-top: 0%;
    padding-bottom: 10%;
   
}
@media(min-width: 650px){
    .header-subtitulo{
        font-size: 36px;
        padding-left: 50px;
        padding-top: 0;
    }
   
}
.link-tarefa{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 20px;
    margin-right: 15px;
    border: solid 1px rgb(255, 255, 255);
    border-radius: 5px;
    background-color: #00428F;
}
@media(min-width: 650px){
   .link-tarefa{
       margin-right: 30px;
   }
   
}
.link-tarefa:hover{
    background-color: #ffffff;
    color: #00428F;
    border: solid 1px #00428F;
}
</style>