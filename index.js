function pequisacep(cep) {
    let cepfinal = cep
    let validacep = /^[0-9]{8}$/  // expressão "regex" 


    if (cepfinal != "") {
        if (validacep.test(cepfinal)) // se ele validar o "validacep" ele irá executar o cód. cheio de comentarios
        {
            let script = document.createElement('script') /* createElement vai criar um elemnto dentro do html, sendo que o tipo dele é "script" - (criou um elemento) */
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name' /*aqui ele está concatenando os textos, ou seja, o script vai chamar o endereço "cepfinal", só que em vez de passar o cep fixo ele irá passar o da váriavel que ele está recebendo - (deu um valor)  foi pego no viacep*/
            document.body.appendChild(script) /*aqui ele está colocando no body - (adicionou no body)*/
        }
        else // se não ele irá aparecer a mensagem abaixo
        {
            alert('CEP Invalido')
            limparcampos()
        }
    }
    else {
        limparcampos() /*se não, limpa os campos automaticamente (se apagar o cep, automaticamente apaga a rua, bairro, cidade, uf) */
    }
}

function callback_name(objetocep) {
    /* console.log(objetocep) "ajuda a indentificar o erro quando se aperta o f12 (index.js:22) mostra em qual linha está o erro" */

    if (!("erro" in objetocep)) /* se não tem erro dentro de cep ele irá trazer o resultado */ {
        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('cidade').value = (objetocep.localidade)
        document.getElementById('uf').value = (objetocep.uf)
    }
    else /* se tem erro dentro do cep irá aparecer a mensagem abaixo */ {
        limparcampos()
        alert('CEP não encontrado')
    }
}

function limparcampos() {
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
}