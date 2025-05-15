function carregar (){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('img');
var data = new Date();
var hora = data.getHours();
var minutes = data.getMinutes();
msg.innerHTML= `Agora são ${hora} horas, e ${minutes} minutos`;

if (hora >= 0 && hora < 12) {
    img.src= 'manha.png'
    document.body.style.background = '#ffeec8'
} else if (hora >= 12 && hora < 18){
    img.src= 'tarde.png'
    document.body.style.background = '#f7bc48'
} else { img.src= 'noite.png'
    document.body.style.background = '#0d0c11'
}

}