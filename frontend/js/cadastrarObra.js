const btn = document.getElementById('btn')
const resposta = document.getElementById('resposta')

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const cnpj = document.getElementById('cnpj').value
    const token = localStorage.getItem('token')

    const valores ={
        nome:nome,
        cnpj:cnpj,
    }
    fetch('http://localhost:3000/cadastrarObra',{
        method:'POST',
        headers:{   'Content-Type': 'application/json','Authorization': token
},
        body:JSON.stringify(valores)
       
    })
    .then(res=>res.json())
    .then(dados=>{
        resposta.innerHTML+=`<p>${dados.message}</p>`
    })
    .catch((error)=>{
        console.error(error)
    })
})