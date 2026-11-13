const btn = document.getElementById('btn')
const resposta = document.getElementById('resposta')

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const id = document.getElementById('id').value

    fetch(`http://localhost:3000/consultarObra/${codObra}`,{
        method:'GET',
        headers:{'Authorization': token
},
       
    })
    .then(res=>res.json())
    .then(dados=>{
        resposta.innerHTML+=`<p>${dados.nome}</p>`
        resposta.innerHTML+=`<p>${dados.cnpj}</p>`
    })
    .catch((error)=>{
        console.error(error)
    })
})