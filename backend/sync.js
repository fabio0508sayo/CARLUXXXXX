const {Funcionario,Movimentacao,Obra,Construcao}=require('./models/rel')
const conn = require('./db/conn')
async function syncDatabase() {
    try{
        await conn.sync({force:true})
        console.log('Sincronizando tabelas')
    }catch(error){
        console.error(error)
    }finally{
        await conn.close()
                console.log('Sfechando conexao')

    }
}
syncDatabase()