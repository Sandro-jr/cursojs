var res = document.getElementById('res')
res.innerHTML = '<p>Aguardando dados...</p>'

function contar(){

var inic = document.getElementById('inicio')
var f = document.getElementById('fim')
var passo = document.getElementById('passos')
var inicio = Number(inic.value)
var fim = Number(f.value)
var passos = Number(passo.value)
res.innerHTML = '<p>Contando: </p>'

if(inicio == '' || fim == '' || passos == ''){
    window.alert('Os campos são obrigatórios, preencha todos os campos!')
}else if(passos == 0){
    window.alert('Passo inválido, configurando para passo = 1')
    passos = 1
}
    if(inicio <= fim){
    for(var i = inicio; i <= fim; i += passos){
    
    res.innerHTML += `<p><strong>👉 ${i} </strong></p>`
}
    res.innerHTML += '<p><strong>🏁</strong></p>'
}else{
    for(var i = inicio; i > fim; i -= passos){
    
        res.innerHTML += `<p><strong>👉 ${i} </strong></p>`
    }
        res.innerHTML += '<p><strong>🏁</strong></p>'
}

}