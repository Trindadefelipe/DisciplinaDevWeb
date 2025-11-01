function getDados(){
    let elementos = document.getElementsByName('happy');
    for(let i=0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('result').innerHTML = elementos[i].value;
        }
    }
}

let drink = document.querySelector('#drink');
document.getElementById('fd').innerHTML = drink.selected.value;

/*function getDados(){
    let email = document.getElementById('email').value;
    window.alert("Olá! O e-mail " + email + "foi recebido!");
}*/

