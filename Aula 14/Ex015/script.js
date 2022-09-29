function calcular(){
    var numero = document.getElementById('num')
    var res = document.getElementById('res')
    var num = Number(numero.value)
    if(numero.value.length == 0){
        window.alert('Você precisa informar um número')
    }else{
        res.innerHTML = ''
    for(var c = 0; c <=10; c++){
        var item = document.createElement('option')
        item.text = `${num} * ${c} = ${num * c}`
        item.value = `res${c}`
        res.appendChild(item)
    }
}

}