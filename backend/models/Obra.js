const { DataTypes } = require("sequelize");

const db = require('../db/conn')

const Obra = db.define('obra',{
    codObra:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cnpj:{
        type:DataTypes.STRING,
        allowNull:false
    },
  
},{
    timestamps:false,
    tableName:'obras'
})
module.exports=Obra