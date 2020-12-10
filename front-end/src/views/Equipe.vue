<template>
  <div>
    <cabecario></cabecario>
    <main class="main">
      <div class="container">
        <h6 class="display-4 text-center pb-4">Equipes</h6>
        <section class="card">
          <div class="card-body">
            <label class="label--main" for="coordenador">Nome:</label>
            <div>
              <input
                class="form-control"
                v-model="nome"
                type="text"
                name="nome"
                placeholder="Nome da equipe"
              />
            </div>

            <label class="label--main" for="coordenador">Coordenador:</label>
            <div>
              <input
                class="form-control"
                required
                v-model="coordenador"
                type="text"
                name="coordenador"
                placeholder="Coordenador da equipe"
              />
            </div>

            <label class="label--main" for="Dev 1">Dev 1:</label>
            <div>
              <input
                class="form-control"
                required
                v-model="dev1"
                type="text"
                name="dev1"
                placeholder="1º dev da equipe"
              />
            </div>

            <label class="label--main" for="Dev 2">Dev 2:</label>

            <div>
              <input
                class="form-control"
                required
                v-model="dev2"
                type="text"
                name="dev2"
                placeholder="2º dev da equipe"
              />
            </div>

            <label class="label--main" for="Dev 3">Dev 3:</label>
            <div>
              <input
                class="form-control"
                required
                v-model="dev3"
                v-on:keyup.enter="addEquipe(equipe), limparFormulario(), getEquipe()"
                type="text"
                name="dev3"
                placeholder="3º dev da equipe"
              />
            </div>

           <div class="d-flex justify-content-between">
              <button class="btn btn-success mt-4" v-on:click="getEquipe()">Sincronizar</button>
              <button class="btn btn-info pl-4 pr-4 mt-4" v-on:click="addEquipe(equipe), limparFormulario(), getEquipe()">Inserir</button>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <div class="card mt-4" v-for="(equipe, id) in equipes" v-bind:key="id">
            <div class="card-body">
              <h6 class="text-capitalize card-title">{{equipe.nome}} <span class="badge badge-info">{{equipe.id}}</span> </h6>
              <h6 class="text-capitalize font-weight-bold">{{equipe.coordenador}}</h6>
              <h6 class="text-capitalize font-weight-light">{{equipe.dev1}}</h6>
              <h6 class="text-capitalize font-weight-light">{{equipe.dev2}}</h6>
              <h6 class="text-capitalize font-weight-light">{{equipe.dev3}}</h6>
              <div>
                <button class="btn btn-danger pr-4 pl-4" v-on:click="deleteEquipe(equipe.id)">
                  <span class="fa fa-trash"></span>
                </button>

                 <button class="btn btn-warning pr-4 pl-4" v-on:click="deleteEquipe(equipe.id)">
                  <span class="fa fa-tasks"></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <rodaPe></rodaPe>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import cabecario from "../components/Header";
import rodaPe from "../components/Footer";
export default {
  name: "equipes",
  data() {
    return {

      nome: "",
      coordenador: "",
      dev1: "",
      dev2: "",
      dev3: "",
      equipes: []
      
    };
  },
  components: {
    cabecario,
    rodaPe
  },
  methods: {

    addEquipe() {
      const equipe = {
        'nome': this.nome,
        'coordenador': this.coordenador,
        'dev1': this.dev1,
        'dev2': this.dev2,
        'dev3': this.dev3
      };

       const opitions = {
        method: 'POST',
        body: JSON.stringify(equipe),
        headers: {
            'Content-Type': 'application/json'
        }
        
    }
      return fetch('https://api-frameworks.herokuapp.com/api/v1/equipes', opitions)
          .then(res => res.json())
          .then(() =>{
            this.getEquipe()
          }) 
          .catch(erro => console.log(erro))

    },

    getEquipe(){

         return fetch('https://api-frameworks.herokuapp.com/api/v1/equipes')
        .then(res => res.json())
         .then((res) =>{
          this.equipes = res
        })
        .catch(erro => console.log(erro))
    },

    deleteEquipe(id) {

      let res = confirm("Deseja deletar essa equipe?");
      if (res == true) {
        fetch(`https://api-frameworks.herokuapp.com/api/v1/equipes/${id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(() =>{
          this.getEquipe()
        })
        .catch(erro => console.log(erro))
      }
      
      
    },

    limparFormulario() {

      (this.nome = ""),
        (this.coordenador = ""),
        (this.dev1 = ""),
        (this.dev2 = ""),
        (this.dev3 = "");
    },
  },
  created (){
     this.getEquipe()
  }

  
};
</script>
  
<style scoped>
.label--main {
  display: block;
  font-family: "Roboto", "sans-serif";
  font-size: 12px;
  padding-top: 6px;
  margin-top: 5px;
  color: #6c757d;
}
.main {
  margin: 10px;
  padding: 20px;
  padding-bottom: 30px;
}

.conteiner_ajuste {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header {
  background: #00428f;
  margin: -8px;
  margin-top: -16px;
}
.header-titulo {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-variant: small-caps;
  color: #f2f2f2;
  padding: 20px;
  padding-bottom: 5px;
  padding-right: 0%;
  background: #00428f;
}
@media (min-width: 650px) {
  .header-titulo {
    font-size: 24px;
    padding-left: 50px;
    padding-bottom: 0;
  }
  .flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.header-subtitulo {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #f2f2f2;
  padding: 20px;
  padding-right: 0%;
  padding-top: 0%;
  padding-bottom: 10%;
}
@media (min-width: 650px) {
  .header-subtitulo {
    font-size: 36px;
    padding-left: 50px;
    padding-top: 0;
  }
}
.link-tarefa {
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  padding: 10px 20px;
  margin-right: 15px;
  border: solid 1px rgb(255, 255, 255);
  border-radius: 5px;
  background-color: #00428f;
}
@media (min-width: 650px) {
  .link-tarefa {
    margin-right: 30px;
  }
}
.link-tarefa:hover {
  background-color: #ffffff;
  color: #00428f;
  border: solid 1px #00428f;
}
</style>
