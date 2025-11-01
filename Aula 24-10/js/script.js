function exibir(){
    let paragrafo = document.getElementById('nome');
    console.log(paragrafo);
    paragrafo.innerHTML = 'Felipe Trindade!'
}
function ocult(){
    
    document.getElementById('nome');
    paragrafo.innerHTML = '';
}

function ligar(){

    document.getElementById('lamp').src = 'img/testo.png';
}

function desligar(){
    document.getElementById('lamp').src = 'img/magro.jpg';
}