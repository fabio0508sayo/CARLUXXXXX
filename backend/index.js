const express = require('express')
const app = express()

const cors = require('cors')
const port = 3000
const host = 'localhost'
const funcionario=require('./controller/funcionario.controller')
const obra = require('./controller/obra.controller')
const authcontroller = require('./controller/auth.controller')
const conn = require('./db/conn')
const middleware=require('./Middleware/authMiddleware')
//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
//rotas
app.post('/cadastrarFuncionario',funcionario.cadastrar)
app.post('/login',authcontroller.login)
//rotas privadas
app.use(middleware)
app.post('/cadastrarObra',obra.cadastrar)
app.get('/consultarObra/:codObra',obra.consultar)
app.get('/consultarObraNome/:nome',obra.consultarNome)
app.delete('/deletarObra/:codFuncionario',obra.deletar)

conn.sync()
.then(()=>{
    app.listen(port,host,()=>{
        console.log('Aplicacao rodando')
    })
})
.catch((error)=>[
    console.error(error)
])