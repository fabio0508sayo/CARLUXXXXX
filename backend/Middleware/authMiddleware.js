const chace = 'emily'
const Cryptoo= require('crypto-js')
async function authMiddleware(req,res,next) {
    const token = req.headers['authorization']
    if(!token){
        return res.status(400).json({message:'TOken invalido'})
    }
    try{
        const bytes =Cryptoo.AES.decrypt(token,chace)
        const dadoNaoCripto=bytes.toString(Cryptoo.enc.Utf8)
        if(!dadoNaoCripto){
            return res.status(400).json({message:'Dados invalidos'})
        }
        const payload = JSON.parse(dadoNaoCripto)
        if(Date.now() > payload.expirar){
            return res.status(400).json({message:'Tempo expirou'})
        }
        req.codFuncionario=payload.codFuncionario
        next()
    }catch(error){
        console.error(error)
    }
}
module.exports=authMiddleware