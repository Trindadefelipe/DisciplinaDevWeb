function pesquisacep(valor){
    var cep = valor.replace(/\D/g, ''); //substitua tudo que não for digito.
    //console.log(cep);
    if(cep !== ""){
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){
            //Enquanto aguarda a consulta
            let inputs = document.querySelectorAll('.endereco');
            for(let i = 0; i < inputs.length; i++){
                inputs[i].value = "...";
            }
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            alert("CEP inválido!");
        }
    }
}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;
    }
}