var slct = document.getElementById('selc')
var res = document.getElementById('res')
var res2 = document.getElementById('res2')
var salvo = []

function salvar(){
    var num = document.getElementById('num')
    var n = Number(num.value)
    var soma = 0
    soma += n
 if(n == ''){
    window.alert('Você precisa informar ao menos um número')

}else if(n < 1 || n > 100){
    window.alert('O número a digitar deve estar entre 1 até 100')
}else if(salvo.includes(n) == true){
    
    
    window.alert('Este número já foi usado, digite outro número')
}
else{
    salvo.push(n)
    var op = document.createElement('option')
    op.innerText = `O número digitado foi ${n}`
    slct.appendChild(op)
}
    num.value = ''
    num.focus()
}

function finalizar(){
    res.innerText = `Ao todo temos ${salvo.length} itens cadastrados`
    var maior = 0
    var soma = 0
    for(var s = 0; s < salvo.length; s++){
        if(salvo[s] > maior){
            maior = salvo[s]
        }

    }
    res.innerHTML += `</br>Maior número é ${maior}</br>`
    for(var s = 0; s < salvo.length; s++){
        if(salvo[s] < maior){
            maior = salvo[s]
        }
        soma += salvo[s]
    }
    var media = soma/salvo.length
    res.innerHTML += `Menor número é ${maior}</br>`
    res.innerHTML += `A soma de todos os números cadastrados é ${soma}</br>`
    res.innerHTML += `A media de todos os números cadastrados é ${media}`


}