const chace = 'emily'
const Cryptoo= require('crypto-js')
const Obra = require('../models/Obra')
const cadastrar= async(req,res)=> {
    const {cnpj,nome} = req.body
    if(!cnpj||!nome){
        return res.status(400).json({message:'preencha tudo'})
    }
    try{
       const cnpjNAo=Cryptoo.AES.encrypt(cnpj,chace).toString()
       await Obra.create({
        cnpj:cnpjNAo,
        nome:nome,
       })
       return res.status(201).json({message:'Cadastro feito com sucesso'})
    }catch(error){
        console.error(error)
               return res.status(500).json({message:'Cadastro feito com sucesso'})

    }
}
const consultar= async(req,res)=> {
    const {codObra} = req.params
  
    try{
        const consultarrr = await Obra.findByPk(codObra)
        if(!consultarrr){
            return res.status(400).json({message:'Obra inexistente'})
        }
       const cnpjNao=Cryptoo.AES.decrypt(consultarrr.cnpj,chace).toString()
       const resultado ={
        cnpj:cnpjNao,
        nome:consultarrr.nome
       }
       return res.status(200).json(resultado)
    }catch(error){
        console.error(error)
               return res.status(500).json({message:'Cadastro feito com sucesso'})

    }
}
const consultarNome= async(req,res)=> {
    const {nome} = req.params
  
    try{
        const consultarr = await Obra.findByPk(nome)
        if(!consultarr){
            return res.status(400).json({message:'Obra inexistente'})
        }
       const cnpjNao=Cryptoo.AES.decrypt(consultarrr.cnpj,chace).toString()
       const resultado ={
        cnpj:cnpjNao,
        nome:consultarr.nome
       }
       return res.status(200).json(resultado)
    }catch(error){
        console.error(error)
               return res.status(500).json({message:'Cadastro feito com sucesso'})

    }
}
const deletar= async(req,res)=> {
    const {codObra} = req.params
  
    try{
        const consultarrr = await Obra.findByPk(codObra)
        await consultarrr.destroy()
       return res.status(200).json({message:'Deletado com sucesso'})
    }catch(error){
        console.error(error)
               return res.status(500).json({message:'Cadastro feito com sucesso'})

    }
}
module.exports={cadastrar,consultar,deletar,consultarNome}