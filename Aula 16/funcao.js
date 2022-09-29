/*function parimpar(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }


}
    var teste = parimpar(5)
    console.log(teste)*/

/*function soma(n1, n2){
    return n1 + n2
}

var teste = soma(7,5)
console.log(teste)*/

/*function fatorial(n){
    var fat = 1
    if(n == 1){
        return 1
    }else{
        for(var c = 1; c <= n; c++){
            fat *= c
        }
    }
    return fat
}

var teste = fatorial(5)
console.log(teste)*/

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))