const { DataTypes } = require("sequelize");

const db = require('../db/conn')

const Construcao = db.define('construcao',{
    codConstrucao:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    idObra:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'obras',
            key:'codObra'
        }
    },
    descricao:{
        type:DataTypes.STRING,
        allowNull:false
    },
    categoria:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quantidade:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    codigoLote:{
        type:DataTypes.STRING,
        allowNull:false
    },
  
},{
    timestamps:false,
    tableName:'construcaos'
})
module.exports=Construcao     