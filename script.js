function validar(){

let usuario = document.getElementById("usuario").value 
let senha = document.getElementsById("senha").value   


if (usuario =="" && senha ==""){
    alert("PREENCHA TODOS OS CAMPOS")
}else{
    alert("ascesso permitido")
    window.open('menu.html')
}
}

function calc(){
 let n1 = number(prompt)(("digite o primeiro valor"))
 let n2 = number(prompt)(("digite o segundo valor"))
 let op = number(prompt)(`DADOS INFORMADOS: $(n1) e $(n2)./ESCOLHA UMA OPÇAO:N[1] soma`)
let msg =document.getElementById("msg")
msg.innerHTML =`<h2>processando o resultado</h2>`
}    
