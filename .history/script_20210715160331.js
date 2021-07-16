const form = document.getElementById ('form')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let nome =document.getElementById('name').value;
    let email =document.getElementById('email').value;
    console.log(nome,email)
    let data ={
        nome,email,
    }
let converteData =JSON.stringify(data);
localStorage.setItem('lead',converteData)

let content = document.getElementById('content')

let carregando = `<p>carregando...</p>`

let enviado =`<p>Cadastrado com sucesso</p>`

content.innerHTML =carregando

setTimeout(() => {
content.innerHTML = enviado
},1500)

})

