const chace = 'emily'
const Cryptoo= require('crypto-js')
const Funcionario = require('../models/Funcionario')
const login= async(req,res)=> {
    const {email,senha} = req.body
    if(!email||!senha){
        return res.status(400).json({message:'preencha tudo'})
    }
    try{
        const consultar = await Funcionario.findOne({where:{email:email}})
        const bytes =Cryptoo.AES.decrypt(consultar.senha,chace)
        const dadoNaoCripto=bytes.toString(Cryptoo.enc.Utf8)
        if(senha !==dadoNaoCripto){
            return res.status(400).json({message:'Dados invalidos'})
        }
        const payload = {
            codFuncionario:consultar.codFuncionario,
            expirar : Date.now()+(3*60*60*1000)
        }

        const token =Cryptoo.AES.encrypt(JSON.stringify(payload),chace).toString()
        return res.status(200).json({
            token:token,
            message:'Login feito com sucesso',
            nome:consultar.nome
     } )

    }catch(error){
                       return res.status(500).json({message:'Cadastro feito com sucesso'})

        console.error(error)
    }
}
module.exports={login}