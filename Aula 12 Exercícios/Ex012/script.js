function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    if( hora > 0 && hora <= 12){
        //dia
        img.src = "manha.jpg"
        msg.innerHTML = `<strong>Bom dia, são ${hora}hrs</strong>`
        document.body.style.backgroundColor = "cyan"
    }
    else if( hora > 12 && hora <=18){
        //tarde
        img.src = "tarde.jpg"
        msg.innerHTML = `<strong>Boa tarde, são ${hora}hrs</strong>`
        document.body.style.backgroundColor = "orange"
    }
    else{
        //noite
        img.src = "noite.jpg"
        msg.innerHTML = `<strong>Boa noite, são ${hora}hrs</strong>`
        document.body.style.backgroundColor = "black"
    }

}