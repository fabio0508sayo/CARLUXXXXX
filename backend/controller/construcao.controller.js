const chace = 'emily'
const Cryptoo= require('crypto-js')
const Funcionario = require('../models/Funcionario')
const cadastrar= async(req,res)=> {
    const {email,senha,nome} = req.body
    if(!email||!senha||!nome){
        return res.status(400).json({message:'preencha tudo'})
    }
    try{
       const senhaNAo=Cryptoo.AES.encrypt(senha,chace).toString()
       await Funcionario.create({
        senha:senhaNAo,
        nome:nome,
        email:email
       })
       return res.status(201).json({message:'Cadastro feito com sucesso'})
    }catch(error){
        console.error(error)
               return res.status(500).json({message:'Cadastro feito com sucesso'})

    }
}

module.exports={cadastrar}