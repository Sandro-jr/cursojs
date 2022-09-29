let valores = [0, 8 , 1, 6, 9 ,7 ,3]
valores.push(4)
valores.sort()
console.log(valores)
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
let num = valores.indexOf(2)
if(num == -1){
    console.log('Valor não encontrado')
}
else{
    console.log(`O valor está na prosição ${num}`)
}

/*for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}*/