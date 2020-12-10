import Vue from 'vue'
import Router from 'vue-router'
import equipe from '@/views/Equipe'
import tarefa from '@/views/Tarefa'

Vue.use(Router)

const routes = [
    {
        name: 'equipes',
        path: '/',
        component: equipe
    },
    {
        name: 'tarefa',
        path: '/tarefas',
        component: tarefa
    }
]

const rotas = new Router({ routes })

export default rotas