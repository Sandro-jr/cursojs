var msg = document.getElementById("msg")
var img = document.getElementById("img")
var data = new Date()
var ano = data.getFullYear()

function pessoa(){
    var anos = document.getElementById("anos")
    var nome = document.getElementById("nome")
    var sexo = document.getElementsByName("sex")
    var res = document.getElementById("res")
    var idade = ano - Number(anos.value)
    var genero = ''
    //var img = document.createElement("img")
    //img.setAttribute('id', 'foto')


    if(sexo[0].checked){
        genero = "Homem"
        if(idade >= 0 && idade < 4)
        {
            //Bebe
            //img.setAttribute('src', 'bebeM.jpg')
            img.src = "bebeM.jpg"
        }
        else if(idade >= 4 && idade < 14){
            //Criança
            //img.setAttribute('src', 'criancaM.jpg')
            img.src = "criancaM.jpg"
        }
        else if(idade >= 14 && idade < 40){
            //Jovem
            //img.setAttribute('src', 'jovemM.jpg')
            img.src = "jovemM.jpg"
        }
        else{
            //Velho
            //img.setAttribute('src', 'velhoM.jpg')
            img.src = "velhoM.jpg"
        }
    }
    else{
        genero = "Mulher"
        if(idade >= 0 && idade < 4)
        {
            //Bebe
            //img.setAttribute('src', 'bebeF.jpg')
            img.src = "bebeF.jpg"
        }
        else if(idade >= 4 && idade < 14){
            //Criança
            //img.setAttribute('src', 'criancaF.jpg')
            img.src = "criancaF.jpg"
        }
        else if(idade >= 14 && idade < 40){
            //Jovem
            //img.setAttribute('src', 'jovemF.jpg')
            img.src = "jovemF.jpg"
        }
        else{
            //Velho
            //img.setAttribute('src', 'velhoF.jpg')
            img.src = "velhoF.jpg"
        }
    }
   /* if(idade > 0 && idade <= 4){

        if(sexo[0].checked){

            img.src = "bebeM.jpg"
            genero = "Homem"
        }
        else{
            img.src = "bebeF.jpg"
            genero = "Mulher"
        }

    }
    else if(idade > 4 && idade < 14){
        
        if(sexo[0].checked){

            img.src = "criancaM.jpg"
            genero = "Homem"

        }
        else{
            img.src = "criancaF.jpg"
            genero = "Mulher"
        }

    }
    else if(idade >= 14 && idade < 40){

        if(sexo[0].checked){

            img.src = "jovemM.jpg"
            genero = "Homem"

        }
        else{
            img.src = "jovemF.jpg"
            genero = "Mulher"
        }

    }
    else if (idade < 0){
        msg.innerHTML = "<strong>Digitou errado</strong>"
        img.src = "avatar.jpg"


    }
    else{

        if(sexo[0].checked){

            img.src = "velhoM.jpg"
            genero = "Homem"

        }
        else{
            img.src = "velhoF.jpg"
            genero = "Mulher"
        } 
    }*/

    res.innerHTML = `<p><strong>Você é ${genero} e tem ${idade} anos</strong></p>`
    res.appendChild(img)
}