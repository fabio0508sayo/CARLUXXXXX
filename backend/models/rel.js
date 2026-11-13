const Movimentacao = require('./Movimentacao')
const Funcionario = require('./Funcionario')
const Obra = require('./Obra')
const Construcao = require('./Construcao')

Obra.hasMany(Construcao,{
    as:'construcaoObra',
    foreignKey:'idObra',
    onDelete:'CASCADE'
})
Construcao.belongsTo(Obra,{
    as:'obraConstrucao',
    foreignKey:'idObra',
    onDelete:'CASCADE'
})
Construcao.hasMany(Movimentacao,{
    as:'MovimentoConstrucao',
    foreignKey:'idConstrucao',
    onDelete:'CASCADE'
})
Movimentacao.belongsTo(Construcao,{
    as:'obraConstrucao',
    foreignKey:'idConstrucao',
    onDelete:'CASCADE'
})
module.exports={Obra,Construcao,Movimentacao,Funcionario}