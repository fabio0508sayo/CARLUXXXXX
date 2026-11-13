const { DataTypes } = require("sequelize");

const db = require('../db/conn')

const Movimentacao = db.define('movimentacao',{
    codMovimentacao:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    idConstrucao:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'construcaos',
            key:'codConstrucao'
        }
    },
    tipo:{
        type:DataTypes.ENUM('ENTRADA','SAIDA'),
        allowNull:false
    },
    data:{
        type:DataTypes.DATE,
        allowNull:false
    },
   
  
},{
    timestamps:false,
    tableName:'movimentacaos'
})
module.exports=Movimentacao     